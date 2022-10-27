import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import {getLocationData} from '../../../store/slices/getLocationDataSlice'
import * as Styled from './AdminChangeContentStyles'
import {selectOptionsData} from '../../admin-common-data/selectLocationData'
import {Select, Input} from '../../admin-common-components'
import {AdminBeerCardItem} from '../'
import {Button} from '../../admin-common-components'

const AdminChangeContent = () => {

    const [selectedLocation, setSelectedLocation] = useState('kepna')
    const [pass, setPass] = useState('')
    const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true)
    const [isPassOk, setIsPassOk] = useState(false)

    const beerCardsData = useSelector(state => state.locationData.cards)
    const isLoading = useSelector(state => state.locationData.loading)
    const dispatch = useDispatch()

    const hardPass = '123$4321'

    const changeLocation = (option) => {
        setSelectedLocation(option)
    }

    const addPass = (pass) => {
        setPass(pass)
    }

    // useEffect(() => {
    //     if (pass) setIsLoginBtnDisabled(false)
    // }, [pass])

    const toEnterPassword = (func, value) => {
        func(value)
        setIsLoginBtnDisabled(false)
    }

    const toSelectLocation= (func, value) => {
        func(value)
    }

    const toComparePassLocation = () => {
        if (hardPass === pass) setIsPassOk(true)
        else setIsPassOk(false)
    }

    const getLocationCardData = (location) => {
        dispatch(getLocationData({location: location, kind: 'beer'}))
    }

    const beerCardsToChange = beerCardsData.map(item => (
        <AdminBeerCardItem 
            key={uuidv4()}
            id={item.id}
            country={item.country}
            name={item.name}
            title={item.title}
            type={item.type}
            vol1={item.vol1}
            vol03={item.vol03}
            vol05={item.vol05}
            location={selectedLocation}
        />
    ))

    return (
        <Styled.AdminChangeContent>
            <div>
                <Select
                    funcToChange={changeLocation}
                    onChange={toSelectLocation}
                    selectOptionsData={selectOptionsData}
                    selectedValue={selectedLocation}
                />
                <Input
                    funcToChange={addPass}
                    onChange={toEnterPassword}
                    type="password"
                />
                <p>{selectedLocation}</p>
                <p>pass: {pass}</p>
                <Button 
                    label="Login"
                    onClick={() => getLocationCardData(selectedLocation)}
                    isDisabled={isLoginBtnDisabled}
                />
                {isPassOk && (
                    <p>Pass OK</p>
                )}
            </div>
            <Styled.AdminCardsWrapper>
                {beerCardsToChange}
            </Styled.AdminCardsWrapper>

        </Styled.AdminChangeContent>
    )
}

export default AdminChangeContent
