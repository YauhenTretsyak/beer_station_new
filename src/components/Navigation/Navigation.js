import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useLocation from '../../hooks/useLocation';
import { IconLink } from '../../common-components';
import { SwitchContext } from '../../context/SwitchContext';
import navigationData from './navigation.data';
import socialsData from '../../dataComponents/socials.data';

import logo from '../../assets/BS_logo.png';
import {  
  NavigationWrapper, 
  IconsWrapper, 
  LogoImage,
  WorkTimeInfoWrapper,
  WorkTimeTitle,
  WorkTime, 
  MenuWrapper,
  MenuLink
} from './Navigation.styles';
import useLanguage from '../../hooks/useLanguage';

const icons = socialsData.map(item => {
  return (
    <IconLink 
      key={ uuidv4() }
      link={ item.link }
      icon={ item.icon }
    />
  )
})

const Navigation = (props) => {
  const { navigationLinksData, mainPage } = props;

  const { locationSwitch, langSwitch } = useContext(SwitchContext);
  const locationHeaderData = useLocation(navigationData, locationSwitch.location);
  const locationInfo = useLanguage(locationHeaderData, langSwitch);
  const menuInfo = useLanguage(navigationLinksData, langSwitch);

  const MenuLinks = menuInfo.map(item => {
    return(
      mainPage ? 
      <MenuLink 
        key={ uuidv4() }
        href={ item.link }
      >
        { item.linkText }
      </MenuLink>
      :
      <MenuLink as={NavLink}
        key={ uuidv4() }
        to={ item.link }
      >
        { item.linkText }
      </MenuLink>
    )
  })

  return (
    <NavigationWrapper>
      <LogoImage>
        <img src={ logo } alt='logo' />
      </LogoImage>
      <WorkTimeInfoWrapper>
        <WorkTimeTitle>
          { locationInfo.workTitle }
        </WorkTimeTitle>
        <WorkTime>
          { locationInfo.workTime }
        </WorkTime>
      </WorkTimeInfoWrapper>
      <MenuWrapper>
        { MenuLinks }
      </MenuWrapper>
      <IconsWrapper>
        { icons }
      </IconsWrapper>
    </NavigationWrapper>
  )
}

export default Navigation;