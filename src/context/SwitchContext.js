import { createContext, useState } from "react";

export const SwitchContext = createContext();

const SwitchContextProvider = (props) => {
  const [locationSwitch, setLocationSwitch] = useState('KEPNA')
  const [langSwitch, setLangSwith] = useState('PL')

  const LocationSwitcher = (changedLocation) => {
    setLocationSwitch(changedLocation)
  }

  const LanguageSwitcher = (changedLanguage) => {
    setLangSwith(changedLanguage)
  }

  return (
    <SwitchContext.Provider value={{ langSwitch, LanguageSwitcher, locationSwitch, LocationSwitcher }}>
      { props.children }
    </SwitchContext.Provider>
  )
}

export default SwitchContextProvider;