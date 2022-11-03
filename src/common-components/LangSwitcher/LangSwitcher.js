import {useDispatch, useSelector} from 'react-redux'
import {setLanguage} from '../../store/slices/selectLanguageSlice'
import * as Styled from './LangSwitcherStyles'

const LangSwitcher = () => {
    const dispatch = useDispatch()
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const toSwitchLanguage = (language) => {
        dispatch(setLanguage(language))
    }

    return (
        <Styled.Wrapper>
            <Styled.LanguageSwicthButton 
                onClick={() => toSwitchLanguage('PL')}
                langActive={langSwitch === 'PL'}
            >PL
            </Styled.LanguageSwicthButton>

            <Styled.LanguageSwicthButton 
                onClick={() => toSwitchLanguage('RU')}
                langActive={langSwitch === 'RU'}
            >RU
            </Styled.LanguageSwicthButton>
        </Styled.Wrapper>
    )
}

export default LangSwitcher
