import {memo} from 'react'
import {useSelector} from 'react-redux'
import useLocation from '../../hooks/useLocation'
import useLanguage from '../../hooks/useLanguage'
import {Navigation} from '../index'
import {LocalSelector, LangSwitcher} from '../../common-components'
import {headerData, telTitleTranslate} from './header.data'
import * as Styled from './HeaderStyles'

const Header = (props) => {
    const {navigationLinksData, mainPage} = props
    const location = useSelector(state => state.actualLocation.location)
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const addressData = useLocation(headerData, location)
    const telephoneTitle = useLanguage(telTitleTranslate, langSwitch)

    return (
        <Styled.HeaderContainer> 
            <Navigation 
                navigationLinksData={navigationLinksData}
                mainPage={mainPage}
            />
      
            <Styled.InfoContainer>
                <Styled.AdressInfoWrapper>
                    <Styled.AdressInfo 
                        href={ addressData.googleLocation }
                        target="_blank"
                    >
                        { addressData.barAdress }
                    </Styled.AdressInfo>

                    <LocalSelector 
                        isDisabled={!mainPage}
                    />

                </Styled.AdressInfoWrapper>
                <Styled.Wrapper>
                    <Styled.Telephone href={`tel:+48 ${addressData.tel}`}>
                        <Styled.TelephoneTitle>
                            {telephoneTitle}
                        </Styled.TelephoneTitle>
                        {addressData.tel}
                    </Styled.Telephone>
                    <LangSwitcher />
                </Styled.Wrapper>
            </Styled.InfoContainer>
      
        </Styled.HeaderContainer>
    )
}

export default memo(Header)
