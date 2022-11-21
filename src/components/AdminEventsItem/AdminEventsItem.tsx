import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import {removeEventItemData} from '../../store/slices/getLocationDataSlice'
import {setActiveFlagOfChanges} from '../../store/slices/setFlagIsChangesSaved'
import {getDatabase, ref, set} from 'firebase/database'
import {translations} from '../translations'
import eventsTypesData from '../../dataComponents/eventsTypesData'
import {
    CardsButtonsBox,
    Input,
    DatePicker,
    Textarea,
    Select,
    AlertCard,
    AlertModal,
    InputsBox,
    TextareasBox,
} from '../../common-components'
import {cancelIcon as removeIcon} from '../../dataComponents/svgIcons'
import {AdminEventsItemProps, EventsData, TextParams, TextTypeEnum, ActiveCardsData} from '../types'
// import {InputsParamsProps, TextareasParamsProps} from '../../common-components/types'
import * as Styled from './AdminEventsItemStyles'

const AdminEventsItem: React.FC<AdminEventsItemProps> = ({id, index}) => {

    const dispatch = useDispatch()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const events: EventsData[] = useSelector(state => state.locationData.events)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const location = useSelector(state => state.actualLocationParams.location)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const activeCardsData: ActiveCardsData[] = useSelector(state => state.flagIsChangesSaved.activeCardsData)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const eventItemData = events.find(item => item.id === id)
    const dataWithoutActualId = events.map(item => item.id !== id && item).filter(Boolean)
    const eventIndex = index + 1
    const [eventNewDate, setEventNewDate] = useState('')
    const [eventNewStartTime, setEventNewStartTime] = useState('')
    const [eventNewName, setEventNewName] = useState({PL: '', EN: '', RU: ''})
    const [newDescription, setNewdescription] = useState({PL: '', EN: '', RU: ''})
    const [newLink, setNewLink] = useState('')
    const [newEventIcon, setNewEventIcon] = useState('1')
    const [isDataChanged, setIsDataChanged] = useState(false)
    const [isAlertActive, setIsAlertActive] = useState({isActive: false, isSuccessful: false})
    const [isAlertModalActive, setIsAlertModalActive] = useState(false)
    const isSaveFuncEnable = Boolean(eventNewDate) && Boolean(eventNewStartTime) && Boolean(eventNewName.PL) && Boolean(eventNewName.RU)

    const eventIcon = eventsTypesData.find(item => item.id === newEventIcon)?.imagePath
    const eventsTranslations = useLanguage(translations, langSwitch).adminEventsItem

    const toDefaultDataValues = () => {
        if (!eventItemData) return
        setEventNewDate(eventItemData?.date || eventNewDate)
        setEventNewStartTime(eventItemData?.startTime || eventNewStartTime)
        setEventNewName(eventItemData?.eventName || eventNewName)
        setNewdescription(eventItemData?.description || newDescription)
        setNewLink(eventItemData?.link || newLink)
        setNewEventIcon(eventItemData?.eventIcon || newEventIcon)
    }

    useEffect(() => {
        toDefaultDataValues()
    }, [id])

    const displayAlert = (isSuccessful: boolean) => {
        setIsAlertActive({isActive: true, isSuccessful: isSuccessful})
        setTimeout(() => {setIsAlertActive({isActive: false, isSuccessful: isSuccessful})}, 1400)
    }

    const openModal = () => {
        setIsAlertModalActive(true)
    }

    const closeModal = () => {
        setIsAlertModalActive(false)
    }

    const saveTrueFlagsCards = () => {
        dispatch(setActiveFlagOfChanges(activeCardsData.concat([{id, isChanges: true}])))
    }

    const saveFalseFlagsCards = () => {
        const activeCardsDataFiltered = activeCardsData.map(item => {
            if (item.id === id) {
                return {
                    id: item.id,
                    isChanges: false,
                }
            } else {
                return {
                    id: item.id,
                    isChanges: item.isChanges,
                }
            }
        })

        dispatch(setActiveFlagOfChanges(activeCardsDataFiltered))
    }

    const toActiveFlagsChangedData = () => {
        setIsDataChanged(true)
        saveTrueFlagsCards()
    }

    const changeDataFunc = (value: string, func?: (value: string) => void, textParams?: TextParams) => {
        toActiveFlagsChangedData()
        
        if (textParams) {
            if (textParams.type === TextTypeEnum.NAME) {
                setEventNewName({...eventNewName, [`${textParams.language}`]: value})
            }

            if (textParams.type === TextTypeEnum.DESCRIPTION) {
                setNewdescription({...newDescription, [`${textParams.language}`]: value})
            }
            
            return
        }

        if (func) func(value)
    }
    
    const writeCardData = () => {
        if (!isSaveFuncEnable) {
            openModal()
            return
        }
        const db = getDatabase()

        const newData = {
            date: eventNewDate,
            startTime: eventNewStartTime,
            description: newDescription,
            eventName: eventNewName,
            id: id,
            link: newLink,
            eventIcon: newEventIcon,
        }

        const postData = dataWithoutActualId.concat(newData).filter(Boolean) as EventsData[]

        const sortedPostData = () => {
            if (postData) {
                const sortedPostData = postData.sort((a, b) => {
                    const dateReverseA: string = a.date.split('-').reverse().join('-')
                    const dateReverseB: string = b.date.split('-').reverse().join('-')

                    return Date.parse(dateReverseA) - Date.parse(dateReverseB)
                })
                
                return sortedPostData
            } else {
                return []
            }
        }
        
        set(ref(db, `${location}/events/`), sortedPostData()).
            then(() => {
                setIsDataChanged(false)
                saveFalseFlagsCards()
                displayAlert(true)
                dispatch(removeEventItemData(sortedPostData()))
            }).
            catch((error) => {
                displayAlert(false)
                console.error(error)
            })
    }

    const handleRemoveEvent = () => {
        const db = getDatabase()

        set(ref(db, `${location}/events/`), dataWithoutActualId).
            then(() => {
                // setIsDataChanged(false)
                saveFalseFlagsCards()
                displayAlert(true)
                dispatch(removeEventItemData(dataWithoutActualId))
            }).
            catch((error) => {
                displayAlert(false)
                console.error(error)
            })
    }

    const saveNewData = () => {
        if (isDataChanged) {
            writeCardData()
        }
    }

    const cancelChanges = () => {
        toDefaultDataValues()
        saveFalseFlagsCards()
        setIsDataChanged(false)
    }

    return (
        <Styled.AdminEventsItem isDataChanged={isDataChanged}>
            <Styled.AlertModalWrapper 
                isAlertModalActive={isAlertModalActive}
            >
                <AlertModal
                    isOpen={isAlertModalActive}
                    message="Uzupełnij wymagane pola!!!"
                    modalFunc={closeModal}
                    width="100%"
                    height="15rem"
                />
            </Styled.AlertModalWrapper>

            <AlertCard
                isAlertActive={isAlertActive}
            />
            <Styled.BackgrndImage src={eventIcon} alt="eventIcon" />
            <Styled.EventIndex>
                {eventIndex}
            </Styled.EventIndex>
            <Styled.RemoveButton
                onClick={() => handleRemoveEvent()}
            >
                {removeIcon}
            </Styled.RemoveButton>
            <Styled.ChangeContent>
                <Styled.ElementsLine>
                    <Styled.InputWrapper inputLabel={eventsTranslations.typeTitle}>
                        <Select 
                            selectOptionsData={eventsTypesData}
                            selectedValue={newEventIcon}
                            funcToChange={setNewEventIcon}
                            onChange={changeDataFunc}
                        />
                        <Styled.ImageBox>
                            <img src={eventIcon} alt="eventIcon" />
                        </Styled.ImageBox>
                    </Styled.InputWrapper>
                </Styled.ElementsLine>
                <Styled.ElementsLine 
                    boxLabel={eventsTranslations.nameTitle}
                    isRequired={true}
                >
                    {/* <InputsBox inputParams={inputsBoxParams} /> */}
                    <Styled.InputWrapperSecondary inputLabel="Polski">
                        <Input 
                            type="text"
                            placeholder="Nazwa eventu"
                            textParams={{type: TextTypeEnum.NAME, language: 'PL'}}
                            incomeValue={eventNewName.PL}
                            onChange={changeDataFunc}
                        />
                    </Styled.InputWrapperSecondary>
                    <Styled.InputWrapperSecondary inputLabel="English">
                        <Input 
                            type="text"
                            placeholder="Name of event"
                            textParams={{type: TextTypeEnum.NAME, language: 'EN'}}
                            incomeValue={eventNewName.EN}
                            onChange={changeDataFunc}
                        />
                    </Styled.InputWrapperSecondary>
                    <Styled.InputWrapperSecondary inputLabel="Русский">
                        <Input 
                            type="text"
                            placeholder="Название события"
                            textParams={{type: TextTypeEnum.NAME, language: 'RU'}}
                            incomeValue={eventNewName.RU}
                            onChange={changeDataFunc}
                        />
                    </Styled.InputWrapperSecondary>
                </Styled.ElementsLine>
                <Styled.ElementsLine boxLabel={eventsTranslations.descriptionTitle}>
                    {/* <TextareasBox 
                        textareaParams={textareasBoxParams}
                    /> */}
                    <Styled.InputWrapperSecondary inputLabel="Polski">
                        <Textarea 
                            placeholder = "Opis eventu"
                            textParams = {{type: TextTypeEnum.DESCRIPTION, language: 'PL'}}
                            incomeValue={newDescription.PL}
                            onChange={changeDataFunc}
                        />
                    </Styled.InputWrapperSecondary>
                    <Styled.InputWrapperSecondary inputLabel="English">
                        <Textarea 
                            placeholder = "Description of event"
                            textParams = {{type: TextTypeEnum.DESCRIPTION, language: 'EN'}}
                            incomeValue={newDescription.EN}
                            onChange={changeDataFunc}
                        />
                    </Styled.InputWrapperSecondary>
                    <Styled.InputWrapperSecondary inputLabel="Русский">
                        <Textarea 
                            placeholder = "Описание события"
                            textParams = {{type: TextTypeEnum.DESCRIPTION, language: 'RU'}}
                            incomeValue={newDescription.RU}
                            onChange={changeDataFunc}
                        />
                    </Styled.InputWrapperSecondary>
                </Styled.ElementsLine>
                <Styled.ElementsLine>
                    <Styled.InputWrapper inputLabel={eventsTranslations.linkTitle}>
                        <Input 
                            type="text"
                            placeholder="Link"
                            incomeValue={newLink}
                            funcToChange={setNewLink}
                            onChange={changeDataFunc}
                        />
                    </Styled.InputWrapper>
                    <Styled.InputWrapper 
                        isRequired={true}
                        inputLabel={eventsTranslations.dateTitle}
                    >
                        <DatePicker
                            incomeValue={eventNewDate}
                            onChange={setEventNewDate}
                            funcIsDataChanged={toActiveFlagsChangedData}
                        />
                    </Styled.InputWrapper>
                    <Styled.InputWrapper
                        isRequired={true}
                        inputLabel={eventsTranslations.startTimeTitle}
                    >
                        <Input 
                            type="fractionalNumber"
                            placeholder="--.--"
                            incomeValue={eventNewStartTime}
                            funcToChange={setEventNewStartTime}
                            onChange={changeDataFunc}
                        />
                    </Styled.InputWrapper>
                </Styled.ElementsLine>
            </Styled.ChangeContent>
            <CardsButtonsBox 
                saveData={() => saveNewData()} 
                resetChanges={() => cancelChanges()} 
                isDisabled={!isDataChanged}
            />
        </Styled.AdminEventsItem>
    )
}

export default AdminEventsItem


// const inputsBoxParams: InputsParamsProps[] = [
//     {
//         inputLabel: 'Polski',
//         inputType: 'text',
//         placeholder: 'Nazwa eventu',
//         textParams: {type: TextTypeEnum.NAME, language: 'PL'},
//         incomeValue: eventNewName.PL,
//         onChange: changeDataFunc,
//     },
//     {
//         inputLabel: 'English',
//         inputType: 'text',
//         placeholder: 'Name of event',
//         textParams: {type: TextTypeEnum.NAME, language: 'EN'},
//         incomeValue: eventNewName.EN,
//         onChange: changeDataFunc,
//     },
//     {
//         inputLabel: 'Русский',
//         inputType: 'text',
//         placeholder: 'Название события',
//         textParams: {type: TextTypeEnum.NAME, language: 'RU'},
//         incomeValue: eventNewName.RU,
//         onChange: changeDataFunc,
//     },
// ]

// const textareasBoxParams: TextareasParamsProps[] = [
//     {
//         textareaLabel: 'Polski',
//         placeholder: 'Opis eventu',
//         textParams: {type: TextTypeEnum.DESCRIPTION, language: 'PL'},
//         incomeValue: newDescription.PL,
//         handleOnChange: changeDataFunc,
//     },
//     {
//         textareaLabel: 'English',
//         placeholder: 'Description of event',
//         textParams: {type: TextTypeEnum.DESCRIPTION, language: 'EN'},
//         incomeValue: newDescription.EN,
//         handleOnChange: changeDataFunc,
//     },
//     {
//         textareaLabel: 'Русский',
//         placeholder: 'Описание события',
//         textParams: {type: TextTypeEnum.DESCRIPTION, language: 'RU'},
//         incomeValue: newDescription.RU,
//         handleOnChange: changeDataFunc,
//     },
// ]