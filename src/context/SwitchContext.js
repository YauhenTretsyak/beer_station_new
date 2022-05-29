import { createContext, useState } from 'react';

export const SwitchContext = createContext();

const SwitchContextProvider = (props) => {
  const [locationSwitch, setLocationSwitch] = useState({location: 'kepna', address: 'Kępna, 15'})

  const [langSwitch, setLangSwith] = useState('PL')

  const LocationSwitcher = (location, address) => {
    setLocationSwitch({location, address})
  }

  const LanguageSwitcher = (changedLanguage) => {
    if (changedLanguage && typeof(changedLanguage) === 'string') {
      setLangSwith(changedLanguage.toUpperCase()) 
    } 
  }

  return (
    <SwitchContext.Provider value={{ langSwitch, LanguageSwitcher, locationSwitch, LocationSwitcher }}>
      { props.children }
    </SwitchContext.Provider>
  )
}

export default SwitchContextProvider;