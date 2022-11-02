import React from 'react'
import * as Styled from './AdminHeaderStyles'

const AdminHeader: () => JSX.Element = () => (
    <Styled.AdminHeader>
        <Styled.MenuLink href="/">
                Back to main page
        </Styled.MenuLink>
    </Styled.AdminHeader>
)

export default AdminHeader
