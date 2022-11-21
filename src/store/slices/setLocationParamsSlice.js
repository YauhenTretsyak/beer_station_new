import {createSlice} from '@reduxjs/toolkit'

export const setLocationParamsSlice = createSlice({
    name: 'location',
    initialState: {
        location: 'kepna',
        locationKind: 'beer'
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },

        setLocationKind: (state, action) => {
            state.locationKind = action.payload
        }
    }
})

export const {setLocation, setLocationKind} = setLocationParamsSlice.actions
export default setLocationParamsSlice.reducer
