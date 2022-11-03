import {useDispatch, useSelector} from 'react-redux'
import {setLanguage} from '../../store/slices/selectLanguageSlice'
import {Wrapper, LanguageSwicthButton} from './LangSwitcher.styles'

const LangSwitcher = () => {
    const dispatch = useDispatch()
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const toSwitchLanguage = (language) => {
        dispatch(setLanguage(language))
    }

    return (
        <Wrapper>
            <LanguageSwicthButton 
                onClick={() => toSwitchLanguage('PL')}
                langActive={langSwitch === 'PL'}
            >PL
            </LanguageSwicthButton>

            <LanguageSwicthButton 
                onClick={() => toSwitchLanguage('RU')}
                langActive={langSwitch === 'RU'}
            >RU
            </LanguageSwicthButton>
        </Wrapper>
    )
}

export default LangSwitcher