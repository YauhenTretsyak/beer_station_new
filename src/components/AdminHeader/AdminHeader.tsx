import React from 'react'
import {useSelector} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import {translations} from '../translations'
import * as Styled from './AdminHeaderStyles'

const AdminHeader: () => JSX.Element = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const linkTitle = useLanguage(translations, langSwitch).adminHeader.linkTitle
    
    return (
        <Styled.AdminHeader>
            <Styled.MenuLink href="https://www.beerstation.pl">
                {linkTitle}
            </Styled.MenuLink>
        </Styled.AdminHeader>
    )
}

export default AdminHeader
