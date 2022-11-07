import {createSlice} from '@reduxjs/toolkit'

export const selectLanguageSlice = createSlice({
    name: 'selectLanguage',
    initialState: {
        langSwitch: 'PL'
    },

    reducers: {
        setLanguage: (state, action) => {
            state.langSwitch = action.payload
        }
    }
})

export const {setLanguage} = selectLanguageSlice.actions

export default selectLanguageSlice.reducer
