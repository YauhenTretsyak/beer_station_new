import React from 'react'
import { Title } from './AdminPanelMainPageStyles'
import { AdminHeader, AdminChangeContent } from './adminComponents'

const AdminPanelMainPage = () => {
    return(
        <>
            <Title>Admin Mode</Title>
            <AdminHeader />
            <AdminChangeContent />
        </>
    )
}

export default AdminPanelMainPage