import React, {useEffect, useState} from 'react'
import flagsListData from '../../../dataComponents/flagList.data'
import * as Styled from './AdminBeerCardItemStyles'
import {Select, Input, Button} from '../../admin-common-components'

interface AdminBeerCardItemProps {
    id: number;
    country: string;
    name: string;
    title: string;
    type: string;
    vol1: string;
    vol03: string;
    vol05: string;
}

const AdminBeerCardItem: React.FC<AdminBeerCardItemProps> = ({
    id,
    country,
    name,
    title,
    type,
    vol1,
    vol03,
    vol05,
}, props) => {
    const [isDataChanged, setIsDataChanged] = useState<boolean>(false)
    const incomeData = {id, country, name, title, type, vol1, vol03, vol05}
    const [newCountry, setNewCountry] = useState<string>('') 
    const [newName, setNewName] = useState<string>('')
    const [newTitle, setNewTitle] = useState<string>('')
    const [newType, setNewType] = useState<string>('')
    const [newVol1, setNewVol1] = useState<string>('')
    const [newVol03, setNewVol03] = useState<string>('')
    const [newVol05, setNewVol05] = useState<string>('')

    const imagePath = flagsListData.find(item => item.id === newCountry)?.imagePath
    useEffect(() => {
        if (!country) return
        setNewCountry(country)
        setNewName(name.length === 0 ? '--' : name)
        setNewTitle(title.length === 0 ? '--' : title)
        setNewType(type.length === 0 ? '--' : type)
        setNewVol1(vol1.length === 0 ? '--' : vol1)
        setNewVol03(vol03.length === 0 ? '--' : vol03)
        setNewVol05(vol05.length === 0 ? '--' : vol05)
    }, [props])

    const changeDataFunc = (func: (value: string) => void, value: string) => {
        func(value)
        if (!isDataChanged) setIsDataChanged(true)
    }

    const resetChanges = () => {
        setNewCountry(country)
        setNewName(name)
        setNewTitle(title)
        setNewType(type)
        setNewVol1(vol1)
        setNewVol03(vol03)
        setNewVol05(vol05)
        setIsDataChanged(false)
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
                    onChange={setNewCountry}
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
                    onClick={() => {console.log(isDataChanged)}}
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
