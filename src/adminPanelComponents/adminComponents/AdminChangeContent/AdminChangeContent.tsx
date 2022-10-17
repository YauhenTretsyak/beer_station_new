import React from "react"
import * as Styled from "./AdminChangeContentStyles"
import {selectOptionsData} from '../../admin-common-data/selectLocationData'
import { Select } from "../../admin-common-components"

const AdminChangeContent = () => {
    return(
        <Styled.AdminChangeContent>
            <Select
                selectOptionsData={selectOptionsData}
            />
        </Styled.AdminChangeContent>
    )
}

export default AdminChangeContent
