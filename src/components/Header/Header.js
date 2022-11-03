import {memo} from 'react'
import {useSelector} from 'react-redux'
import useLocation from '../../hooks/useLocation'
import {Navigation} from '../index'
import {LocalSelector, LangSwitcher} from '../../common-components'
import headerData from './header.data'
import * as Styled from './HeaderStyles'

const Header = (props) => {
    const {navigationLinksData, mainPage} = props
    const location = useSelector(state => state.actualLocation.location)
    const addressData = useLocation(headerData, location)

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
                        {addressData.tel}
                    </Styled.Telephone>
                    <LangSwitcher />
                </Styled.Wrapper>
            </Styled.InfoContainer>
      
        </Styled.HeaderContainer>
    )
}

export default memo(Header)
