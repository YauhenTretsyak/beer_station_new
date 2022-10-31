import {createSlice} from '@reduxjs/toolkit'

export const isLoginOkSlice = createSlice({
    name: 'isLogin',
    initialState: {
        isAuthSuccessful: false,
        isPasswordInvalid: false,
    },
    reducers: {
        setIsloginOk: (state) => {
            state.isAuthSuccessful = true
            state.isPasswordInvalid = false
        },

        setIsloginInvalid: (state) => {
            state.isAuthSuccessful = false
            state.isPasswordInvalid = true
        },

        setIsPasswordValid: (state) => {
            state.isPasswordInvalid = false
        }
    }
})

export const {setIsloginOk, setIsloginInvalid, setIsPasswordValid} = isLoginOkSlice.actions
export default isLoginOkSlice.reducer
