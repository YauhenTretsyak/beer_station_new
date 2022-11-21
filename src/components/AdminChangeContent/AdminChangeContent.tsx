import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import {setIsPasswordValid} from '../../store/slices/setIsLoginOkSlice'
import {LoginBar, AdminBeerCards, AdminEvent} from '..'
import {AlertModal, KindSwitcher} from '../../common-components'
import {translations} from '../translations'
import * as Styled from './AdminChangeContentStyles'

const AdminChangeContent: () => JSX.Element = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {location: actualLocation, locationKind} = useSelector(state => state.actualLocationParams)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isAuthSuccessful = useSelector(state => state.isLoginOk.isAuthSuccessful)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isPasswordInvalid = useSelector(state => state.isLoginOk.isPasswordInvalid)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const alertText = useLanguage(translations, langSwitch).changeContent.alert
    const dispatch = useDispatch()

    const beerCards = <AdminBeerCards isAuthSuccessful={isAuthSuccessful} />
    const eventsCards = <AdminEvent isAuthSuccessful={isAuthSuccessful} />

    let contentToChange: JSX.Element

    switch (locationKind) {
    case 'beer':
        contentToChange = beerCards
        break
    case 'events':
        contentToChange = eventsCards
        break
    default: 
        contentToChange = beerCards
        break
    }

    

    const handleCloseErrorModal = () => {
        dispatch(setIsPasswordValid())
    }

    return (
        <Styled.AdminChangeContent>
            <LoginBar />
            {isAuthSuccessful && (
                <Styled.LocationTitle>
                    {actualLocation}
                </Styled.LocationTitle>
            )}

            <KindSwitcher />

            
            {contentToChange}
            
            <Styled.ErrorMessageWrapper
                isOpen={isPasswordInvalid}
            >
                <AlertModal 
                    message={alertText}
                    isOpen={isPasswordInvalid}
                    modalFunc={handleCloseErrorModal}
                />
            </Styled.ErrorMessageWrapper>
        </Styled.AdminChangeContent>
    )
}

export default AdminChangeContent
