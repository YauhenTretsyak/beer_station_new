import React, {useEffect, useState} from 'react'
import * as Styled from './AdminChangeContentStyles'
import {selectOptionsData} from '../../admin-common-data/selectLocationData'
import {Select, Input} from '../../admin-common-components'
import {Button} from '../../admin-common-components'

const AdminChangeContent: () => JSX.Element = () => {

    const [selectedLocation, setSelectedLocation] = useState('kepna')
    const [pass, setPass] = useState<string | number | null>(null)
    const [isPassOk, setIsPassOk] = useState<boolean>(false)

    const hardPass = '123$4321'

    const changeLocation = (option: string) => {
        setSelectedLocation(option)
    }

    const addPass = (pass: string | number) => {
        setPass(pass)
    }

    const toComparePassLocation = () => {
        if (hardPass === pass) setIsPassOk(true)
        else setIsPassOk(false)
    }

    return (
        <Styled.AdminChangeContent>
            <Select
                onChange={changeLocation}
                selectOptionsData={selectOptionsData}
            />
            <Input
                onChange={addPass}
                type="password"
            />
            <p>{selectedLocation}</p>
            <p>pass: {pass}</p>
            <Button 
                label="Login"
                onClick={toComparePassLocation}
            />
            {isPassOk && (
                <p>Pass OK</p>
            )}
        </Styled.AdminChangeContent>
    )
}

export default AdminChangeContent
