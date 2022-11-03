const useLanguage = (langData, lang) => {
    switch (lang) {
    case 'PL': 
        langData = langData.PL
        break
    case 'RU': 
        langData = langData.RU
        break
    default: 
        langData = langData.PL
    }
    return langData
}

export default useLanguage
