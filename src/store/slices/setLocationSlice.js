import {createSlice} from '@reduxjs/toolkit'

export const setLocationSlice = createSlice({
    name: 'location',
    initialState: {
        location: 'kepna',
        address: 'Kępna, 15'
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },

        setFullAddress: (state, action) => {
            state.location = action.payload.location
            state.address = action.payload.address
        }
    }
})

export const {setLocation, setFullAddress} = setLocationSlice.actions
export default setLocationSlice.reducer
