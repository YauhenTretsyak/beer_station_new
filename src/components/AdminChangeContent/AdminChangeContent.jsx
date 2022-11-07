import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import {setIsPasswordValid} from '../../store/slices/setIsLoginOkSlice'
import {LoadingSpinner, AlertModal} from '../../common-components'
import {v4 as uuidv4} from 'uuid'
import {AdminBeerCardItem, LoginBar} from '..'
import {translations} from '../translations'
import * as Styled from './AdminChangeContentStyles'

const AdminChangeContent = () => {

    const beerCardsData = useSelector(state => state.locationData.cards)
    const actualLocation = useSelector(state => state.actualLocation.location)
    const isAuthSuccessful = useSelector(state => state.isLoginOk.isAuthSuccessful)
    const isPasswordInvalid = useSelector(state => state.isLoginOk.isPasswordInvalid)
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const alertText = useLanguage(translations, langSwitch).changeContent.alert
    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.locationData.loading)

    const beerCardsToChange = beerCardsData.map(item => (
        <AdminBeerCardItem 
            key={uuidv4()}
            id={item.id}
            location={actualLocation}
        />
    ))

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
            <Styled.AdminCardsWrapper>
                {isAuthSuccessful && (
                    isLoading  
                        ?( <LoadingSpinner 
                            loading={isLoading}
                            color="#cfc600"
                            size={10}
                            titleSize="3"
                        />)
                        : beerCardsToChange
                )}
            </Styled.AdminCardsWrapper>
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
