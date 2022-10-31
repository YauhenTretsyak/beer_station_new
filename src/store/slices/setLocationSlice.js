import {createSlice} from '@reduxjs/toolkit'

export const setLocationSlice = createSlice({
    name: 'location',
    initialState: {
        location: 'kepna'
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        }
    }
})

export const {setLocation} = setLocationSlice.actions
export default setLocationSlice.reducer
