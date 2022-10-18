import React from 'react'
import {Title} from './AdminPanelMainPageStyles'
import {AdminHeader, AdminChangeContent} from './adminComponents'

const AdminPanelMainPage: () => JSX.Element = () => (
    <>
        <Title>Admin Mode</Title>
        <AdminHeader />
        <AdminChangeContent />
    </>
)

export default AdminPanelMainPage