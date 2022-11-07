import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import moment from 'moment'
import {AdminBeerCardItemProps, ActiveCardsData} from '../types'
import {setActiveFlagOfChanges} from '../../store/slices/setFlagIsChangesSaved'

import {getDatabase, ref, set} from 'firebase/database'
import {translations} from '../translations'
import flagsListData from '../../dataComponents/flagListData'
import * as Styled from './AdminBeerCardItemStyles'
import {Select, Input, Button} from '../../common-components'

const AdminBeerCardItem: React.FC<AdminBeerCardItemProps> = ({
    id,
    location,
}) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const beerCardsData = useSelector(state => state.locationData.cards).find(item => item.id === id)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const labelsText = useLanguage(translations, langSwitch).cardItem
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const activeCardsData: ActiveCardsData[] = useSelector(state => state.flagIsChangesSaved.activeCardsData)
    const dispatch = useDispatch()
    const [isDataChanged, setIsDataChanged] = useState<boolean>(false)
    const {country, name, title, type, volAlc, vol1, vol03, vol05} = beerCardsData
    const [newCountry, setNewCountry] = useState<string>('') 
    const [newName, setNewName] = useState<string>('')
    const [newTitle, setNewTitle] = useState<string>('')
    const [newType, setNewType] = useState<string>('')
    const [newVolAlc, setNewVolAlc] = useState<string>('')
    const [newVol1, setNewVol1] = useState<string>('')
    const [newVol03, setNewVol03] = useState<string>('')
    const [newVol05, setNewVol05] = useState<string>('')


    const imagePath = flagsListData.find(item => item.id === newCountry)?.imagePath
    useEffect(() => {
        setNewCountry(country)
        setNewName(name)
        setNewTitle(title)
        setNewType(type)
        setNewVol1(vol1)
        setNewVol03(vol03)
        setNewVol05(vol05)
        setNewVolAlc(volAlc)
    }, [id])

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

    const changeDataFunc = (func: (value: string) => void, value: string) => {
        func(value)
        if (!isDataChanged) {
            setIsDataChanged(true)
            saveTrueFlagsCards()
        }
    }

    function writeCardData() {
        const actuallyDate = moment().format('D-M-YYYY')
        const db = getDatabase()
        set(ref(db, `${location}/beer/${id - 1}` ), {
            id,
            country: newCountry,
            name: newName,
            title: newTitle,
            type: newType,
            volAlc: newVolAlc,
            vol1: newVol1,
            vol03: newVol03,
            vol05: newVol05,
            updateDate: actuallyDate || '--.--.----',
        }).
            then(() => {
                setIsDataChanged(false)
                saveFalseFlagsCards()
            }).
            catch((error) => {
                console.error(error)
            })
    }

    const saveNewData = () => {
        if (isDataChanged) {
            writeCardData()
        }
    }

    const resetChanges = () => {
        if (isDataChanged) {
            setNewCountry(country)
            setNewName(name)
            setNewTitle(title)
            setNewType(type)
            setNewVolAlc(volAlc)
            setNewVol1(vol1)
            setNewVol03(vol03)
            setNewVol05(vol05)
            setIsDataChanged(false)
            saveFalseFlagsCards()
        }
    }

    return (
        <Styled.AdminBeerCardItem isDataChanged={isDataChanged}>
            <Styled.CardNumber>
                #{id}
            </Styled.CardNumber>
            <Styled.InputFlexWrapper>
                <Styled.InputLabel>
                    {labelsText.country}:
                </Styled.InputLabel>
                <Select
                    selectOptionsData={flagsListData}
                    funcToChange={setNewCountry}
                    onChange={changeDataFunc}
                    selectedValue={newCountry}
                />
                <Styled.FlagImg src={imagePath} alt="flag" />
            </Styled.InputFlexWrapper>
            <Styled.InputFlexWrapper>
                <Styled.InputLabel>
                    {labelsText.brand}:
                </Styled.InputLabel>
                <Input 
                    type="text"
                    placeholder={newTitle ?? '--'}
                    incomeValue={newTitle}
                    funcToChange={setNewTitle}
                    onChange={changeDataFunc}
                />
            </Styled.InputFlexWrapper>
            <Styled.InputFlexWrapper>
                <Styled.InputLabel>
                    {labelsText.name}:
                </Styled.InputLabel>
                <Input 
                    type="text"
                    placeholder={newName ?? '--'}
                    incomeValue={newName}
                    funcToChange={setNewName}
                    onChange={changeDataFunc}
                />
            </Styled.InputFlexWrapper>
            <Styled.BeerTypeWrapper>
                <Styled.BeerTypeInputWrapper>
                    <Styled.InputLabelBeer>
                        {labelsText.type}:
                    </Styled.InputLabelBeer>
                    <Input 
                        type="text"
                        placeholder={newType ?? '--'}
                        incomeValue={newType}
                        funcToChange={setNewType}
                        onChange={changeDataFunc}
                    />
                </Styled.BeerTypeInputWrapper>
                <Styled.AlcInputWrapper>
                    <Styled.InputLabelAlc>
                        {labelsText.volAlc}:
                    </Styled.InputLabelAlc>
                    <Styled.InputTypeNumber
                        type="fractionalNumber"
                        placeholder={newVolAlc ?? '--'}
                        incomeValue={newVolAlc}
                        funcToChange={setNewVolAlc}
                        onChange={changeDataFunc}
                    />
                    <Styled.InputLabelAlc>
                        %
                    </Styled.InputLabelAlc>
                </Styled.AlcInputWrapper>
            </Styled.BeerTypeWrapper>
            <Styled.ElementsLine>
                <Styled.InputWrapper>
                    <Styled.InputLabel>
                        0.3L {labelsText.cost}:
                    </Styled.InputLabel>
                    <Styled.InputTypeNumber
                        type="number"
                        placeholder={newVol03 ?? '--'}
                        incomeValue={newVol03}
                        funcToChange={setNewVol03}
                        onChange={changeDataFunc}
                    />
                </Styled.InputWrapper>
                <Styled.InputWrapper>
                    <Styled.InputLabel>
                        0.5L {labelsText.cost}:
                    </Styled.InputLabel>
                    <Styled.InputTypeNumber 
                        type="number"
                        placeholder={newVol05 ?? '--'}
                        incomeValue={newVol05}
                        funcToChange={setNewVol05}
                        onChange={changeDataFunc}
                    />
                </Styled.InputWrapper>
                <Styled.InputWrapper>
                    <Styled.InputLabel>
                        1L {labelsText.cost}:
                    </Styled.InputLabel>
                    <Styled.InputTypeNumber 
                        type="number"
                        placeholder={newVol1 ?? '--'}
                        incomeValue={newVol1}
                        funcToChange={setNewVol1}
                        onChange={changeDataFunc}
                    />
                </Styled.InputWrapper>
            </Styled.ElementsLine>
            <Styled.ButtonsWrapper>
                <Button 
                    onClick={() => {saveNewData()}}
                    label="Save"
                    type="apply"
                    isDisabled={!isDataChanged}
                />
                <Button 
                    onClick={() => resetChanges()}
                    label="Cancel"
                    type="cancel"
                    isDisabled={!isDataChanged}
                />
            </Styled.ButtonsWrapper>
        </Styled.AdminBeerCardItem>
    )
}

export default AdminBeerCardItem
