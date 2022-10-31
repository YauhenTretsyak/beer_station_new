import {createSlice} from '@reduxjs/toolkit'

export const flagIsChangesSavedSlice = createSlice({
    name: 'flagIsChangesSaved',
    initialState: {
        isChangesSaved: true,
        activeCardsData: []
    },
    reducers: {
        setActiveFlagOfChanges: (state, action) => {
            state.activeCardsData = action.payload
            const changedCardsFiltered = state.activeCardsData.find(item => item.isChanges === true)
            
            if (changedCardsFiltered) {
                state.isChangesSaved = false
            } else {
                state.isChangesSaved = true
            }
        },
    }
})

export const {setActiveFlagOfChanges} = flagIsChangesSavedSlice.actions
export default flagIsChangesSavedSlice.reducer

