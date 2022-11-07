import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import {getLocationData} from '../../store/slices/getLocationDataSlice'
import {setLocation} from '../../store/slices/setLocationSlice'
import {setIsloginOk, setIsloginInvalid} from '../../store/slices/setIsLoginOkSlice'
import {selectOptionsData} from '../../dataComponents/selectLocationData'
import {beerSlidesDataP} from '../../dataComponents/beerSlidesDataP'
import {translations} from '../translations'
import {LangSwitcher} from '../../common-components/'
import * as Styled from './LoginBarStyles'

const LoginBar: React.FC<JSX.Element> = () => {

    const dispatch = useDispatch()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isChangesSaved = useSelector(state => state.flagIsChangesSaved.isChangesSaved)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const alertText = useLanguage(translations, langSwitch).loginBar.alert
    
    const [selectedLocation, setSelectedLocation] = useState('kepna')
    const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true)
    const [pass, setPass] = useState('')

    const changeLocation = (option: string) => {
        setSelectedLocation(option)
    }

    const addPass = (pass: string) => {
        setPass(pass)
    }

    const toEnterPassword = (func: (value: string) => void, value: string) => {
        func(value)
        setIsLoginBtnDisabled(false)
    }

    const toSelectLocation= (func: (value: string) => void, value: string) => {
        func(value)
    }

    const getLocationCardData = (location: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(getLocationData({location: location, kind: 'beer'}))
    }
    const handleLogin = (location: string) => {
        if (isLoginBtnDisabled || !beerSlidesDataP) return
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const isPswOk = pass === beerSlidesDataP[location].main || pass === beerSlidesDataP[location].work
        if (isPswOk) {
            getLocationCardData(location)
            dispatch(setLocation(location))
            dispatch(setIsloginOk())
            setIsLoginBtnDisabled(true)
        } else {
            dispatch(setIsloginInvalid())
        }
    }

    return (
        <Styled.LoginBar>
            <Styled.LangSwitcherWrapper>
                <LangSwitcher width="12.9" />
            </Styled.LangSwitcherWrapper>
            <Styled.SelectLocation
                funcToChange={changeLocation}
                onChange={toSelectLocation}
                selectOptionsData={selectOptionsData}
                selectedValue={selectedLocation}
            />
            <Styled.InputPassword
                funcToChange={addPass}
                onChange={toEnterPassword}
                type="password"
                placeholder={`password to: ${selectedLocation.toLocaleUpperCase()} `}
            />
            <Styled.ButtonLogin 
                label="Login"
                onClick={() => handleLogin(selectedLocation)}
                isDisabled={isLoginBtnDisabled}
            />
            {!isChangesSaved && (
                <Styled.AlertWrapper
                    isOpen={!isChangesSaved}
                    className="login_bar_alert"
                >
                    <Styled.AlertMessage>
                        {alertText}
                    </Styled.AlertMessage>
                </Styled.AlertWrapper>
            )}

        </Styled.LoginBar>
    )
}

export default LoginBar
