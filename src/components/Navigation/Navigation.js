import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IconLink } from '../../blocks';
import { SwitchContext } from '../../context/SwitchContext';
import navigationData from '../../dataComponents/navigation.data';
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
} from './Navigation.style';

const icons = socialsData.map(item => {
  return (
    <IconLink 
      key={ uuidv4() }
      link={ item.link }
      icon={ item.icon }
    />
  )
})

const Navigation = () => {
  const { locationSwitch, langSwitch } = useContext(SwitchContext);
  const locationHeaderData = locationSwitch === 'KEPNA' ? navigationData.kepna : navigationData.lwowska;
  let locationInfo;
  let menuInfo;

  switch (langSwitch) {
    case 'PL':
      locationInfo = locationHeaderData.PL
      menuInfo = navigationData.menu.PL
      break
    case 'RU':
      locationInfo = locationHeaderData.RU
      menuInfo = navigationData.menu.RU
      break
    default: 
      locationInfo = locationHeaderData.PL
      menuInfo = navigationData.menu.PL
  }

  const MenuLinks = menuInfo.map(item => {
    return(
      <MenuLink
        key={ uuidv4() }
        href={ item.link }
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