import {useContext, memo} from 'react'
import useLocation from '../../hooks/useLocation'
import {Navigation} from '../index'
import {LocalSelector, LangSwitcher} from '../../common-components'
import {SwitchContext} from '../../context/SwitchContext'
import headerData from './header.data'

import {FlexContainer} from '../../styles/StyledElements'
import {
    HeaderContainer,
    AdressInfoWrapper,
    AdressInfo,
    Wrapper,
    Telephone,
} from './Header.styles'


const Header = (props) => {
  
    const {navigationLinksData, mainPage} = props
    const {locationSwitch} = useContext(SwitchContext)
    const addressData = useLocation(headerData, locationSwitch.location)


    return (
        <HeaderContainer> 
            <Navigation 
                navigationLinksData={ navigationLinksData }
                mainPage={ mainPage }
            />
      
            <FlexContainer>
                <AdressInfoWrapper>
                    <AdressInfo 
                        href={ addressData.googleLocation }
                        target="_blank"
                    >
                        { addressData.barAdress }
                    </AdressInfo>

                    <LocalSelector />

                </AdressInfoWrapper>
                <Wrapper>
                    <Telephone href={`tel:+48 ${addressData.tel}`}>
                        {addressData.tel}
                    </Telephone>
                    <LangSwitcher />
                </Wrapper>
            </FlexContainer>
      
        </HeaderContainer>
    )
}

export default memo(Header)