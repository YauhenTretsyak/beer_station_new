// import React, {useEffect, useState} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import {getLocationData} from '../../../store/slices/getLocationDataSlice'
// import * as Styled from './AdminChangeContentStyles'
// import {selectOptionsData} from '../../admin-common-data/selectLocationData'
// import {Select, Input} from '../../admin-common-components'
// import {Button} from '../../admin-common-components'

// interface GetLocationDataProps {
//     location: string;
//     kind: string;
// }

// const AdminChangeContent: () => JSX.Element = () => {

//     const [selectedLocation, setSelectedLocation] = useState('kepna')
//     const [pass, setPass] = useState<string | number | null>(null)
//     const [isPassOk, setIsPassOk] = useState<boolean>(false)

//     const beerCardsData = useSelector(state => state.locationData.cards)
//     const dispatch = useDispatch()

//     const hardPass = '123$4321'

    

//     const changeLocation = (option: string) => {
//         setSelectedLocation(option)
//     }

//     const addPass = (pass: string | number) => {
//         setPass(pass)
//     }

//     const toComparePassLocation = () => {
//         if (hardPass === pass) setIsPassOk(true)
//         else setIsPassOk(false)
//     }
// console.log(beerCardsData)
//     const getLocationCardData: (location: string) => void = () => {
//         dispatch(getLocationData({location: location, kind: 'beer'}))
//     }

//     return (
//         <Styled.AdminChangeContent>
//             <Select
//                 onChange={changeLocation}
//                 selectOptionsData={selectOptionsData}
//             />
//             <Input
//                 onChange={addPass}
//                 type="password"
//             />
//             <p>{selectedLocation}</p>
//             <p>pass: {pass}</p>
//             <Button 
//                 label="Login"
//                 onClick={() => getLocationCardData(selectedLocation)}
//             />
//             {isPassOk && (
//                 <p>Pass OK</p>
//             )}
//         </Styled.AdminChangeContent>
//     )
// }

// export default AdminChangeContent
