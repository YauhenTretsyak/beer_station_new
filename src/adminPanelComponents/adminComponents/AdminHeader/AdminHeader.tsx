import React from 'react'
import * as Styled from './AdminHeaderStyles'

const AdminHeader = () => {
    return(
        <Styled.AdminHeader>
            <Styled.MenuLink href='/'>
                Back to main page
            </Styled.MenuLink>
        </Styled.AdminHeader>
    )
}

export default AdminHeader
