import {memo} from 'react'
import {useSelector} from 'react-redux'
import useLocation from '../../hooks/useLocation'
import {Navigation} from '../index'
import {LocalSelector, LangSwitcher} from '../../common-components'
import headerData from './header.data'

import {
    HeaderContainer,
    AdressInfoWrapper,
    AdressInfo,
    Wrapper,
    Telephone,
    InfoContainer
} from './Header.styles'


const Header = (props) => {
    const location = useSelector(state => state.actualLocation.location)
    const {navigationLinksData, mainPage} = props
    const addressData = useLocation(headerData, location)

    return (
        <HeaderContainer> 
            <Navigation 
                navigationLinksData={navigationLinksData}
                mainPage={mainPage}
            />
      
            <InfoContainer>
                <AdressInfoWrapper>
                    <AdressInfo 
                        href={ addressData.googleLocation }
                        target="_blank"
                    >
                        { addressData.barAdress }
                    </AdressInfo>

                    <LocalSelector 
                        isDisabled={!mainPage}
                    />

                </AdressInfoWrapper>
                <Wrapper>
                    <Telephone href={`tel:+48 ${addressData.tel}`}>
                        {addressData.tel}
                    </Telephone>
                    <LangSwitcher />
                </Wrapper>
            </InfoContainer>
      
        </HeaderContainer>
    )
}

export default memo(Header)