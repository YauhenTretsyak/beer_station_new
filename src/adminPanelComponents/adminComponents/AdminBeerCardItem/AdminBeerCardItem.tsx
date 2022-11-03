import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import {setActiveFlagOfChanges} from '../../../store/slices/setFlagIsChangesSaved'

import {getDatabase, ref, set} from 'firebase/database'

import flagsListData from '../../../dataComponents/flagList.data'
import * as Styled from './AdminBeerCardItemStyles'
import {Select, Input, Button} from '../../admin-common-components'

interface AdminBeerCardItemProps {
    id: number;
    location: string;
}

interface ActiveCardsData {
    id: number;
    isChanges: boolean;
}

const AdminBeerCardItem: React.FC<AdminBeerCardItemProps> = ({
    id,
    location,
}) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const beerCardsData = useSelector(state => state.locationData.cards).find(item => item.id === id)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const activeCardsData: ActiveCardsData[] = useSelector(state => state.flagIsChangesSaved.activeCardsData)
    const dispatch = useDispatch()
    const [isDataChanged, setIsDataChanged] = useState<boolean>(false)
    const {country, name, title, type, vol1, vol03, vol05} = beerCardsData
    const [newCountry, setNewCountry] = useState<string>('') 
    const [newName, setNewName] = useState<string>('')
    const [newTitle, setNewTitle] = useState<string>('')
    const [newType, setNewType] = useState<string>('')
    const [newVol1, setNewVol1] = useState<string>('')
    const [newVol03, setNewVol03] = useState<string>('')
    const [newVol05, setNewVol05] = useState<string>('')


    const imagePath = flagsListData.find(item => item.id === newCountry)?.imagePath
    useEffect(() => {
        setNewCountry(country)
        setNewName(name.length === 0 ? '--' : name)
        setNewTitle(title.length === 0 ? '--' : title)
        setNewType(type.length === 0 ? '--' : type)
        setNewVol1(vol1.length === 0 ? '--' : vol1)
        setNewVol03(vol03.length === 0 ? '--' : vol03)
        setNewVol05(vol05.length === 0 ? '--' : vol05)
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
                    Country:
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
                    Brand:
                </Styled.InputLabel>
                <Input 
                    type="text"
                    placeholder={newTitle ?? '--'}
                    incomeValue={newTitle ?? '--'}
                    funcToChange={setNewTitle}
                    onChange={changeDataFunc}
                />
            </Styled.InputFlexWrapper>
            <Styled.InputFlexWrapper>
                <Styled.InputLabel>
                    Beer name:
                </Styled.InputLabel>
                <Input 
                    type="text"
                    placeholder={newName ?? '--'}
                    incomeValue={newName ?? '--'}
                    funcToChange={setNewName}
                    onChange={changeDataFunc}
                />
            </Styled.InputFlexWrapper>
            <Styled.InputFlexWrapper>
                <Styled.InputLabel>
                    Beer type:
                </Styled.InputLabel>
                <Input 
                    type="text"
                    placeholder={newType ?? '--'}
                    incomeValue={newType ?? '--'}
                    funcToChange={setNewType}
                    onChange={changeDataFunc}
                />
            </Styled.InputFlexWrapper>
            <Styled.ElementsLine>
                <Styled.InputWrapper>
                    <Styled.InputLabel>
                        0.3L cost:
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
                        0.5L cost:
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
                        1L cost:
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
