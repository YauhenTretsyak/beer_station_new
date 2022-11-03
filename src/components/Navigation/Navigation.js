import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import useLocation from '../../hooks/useLocation'
import useLanguage from '../../hooks/useLanguage'
import {IconLink} from '../../common-components'
import navigationData from './navigation.data'
import socialsData from '../../dataComponents/socials.data'
import logo from '../../assets/BS_logo.png'
import * as Styled from './NavigationStyles'

const icons = socialsData.map(item => (
    <IconLink 
        key={ uuidv4() }
        link={ item.link }
        icon={ item.icon }
    />
))

const Navigation = (props) => {
    const {navigationLinksData, mainPage} = props
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const location = useSelector(state => state.actualLocation.location)
    const locationHeaderData = useLocation(navigationData, location)
    const locationInfo = useLanguage(locationHeaderData, langSwitch)
    const menuInfo = useLanguage(navigationLinksData, langSwitch)

    const MenuLinks = menuInfo.map(item => (
        mainPage 
            ? <Styled.MenuLink key={uuidv4()} href={item.link}>
                { item.linkText }
            </Styled.MenuLink>
            : <Styled.MenuLink as={NavLink} key={uuidv4()} to={item.link}>
                { item.linkText }
            </Styled.MenuLink>
    ))

    return (
        <Styled.NavigationWrapper>
            <Styled.LogoImage>
                <img src={ logo } alt="logo" />
            </Styled.LogoImage>
            <Styled.WorkTimeInfoWrapper>
                <Styled.WorkTimeTitle>
                    { locationInfo.workTitle }
                </Styled.WorkTimeTitle>
                <Styled.WorkTime>
                    { locationInfo.workTime }
                </Styled.WorkTime>
            </Styled.WorkTimeInfoWrapper>
            <Styled.MenuWrapper>
                { MenuLinks }
            </Styled.MenuWrapper>
            <Styled.IconsWrapper>
                { icons }
            </Styled.IconsWrapper>
        </Styled.NavigationWrapper>
    )
}

export default Navigation
