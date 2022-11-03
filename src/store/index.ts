import {configureStore} from '@reduxjs/toolkit'
import locationDataSlice from './slices/getLocationDataSlice'
import isLoginOkSlice from './slices/setIsLoginOkSlice'
import setLocationSlice from './slices/setLocationSlice'
import flagIsChangesSavedSlice from './slices/setFlagIsChangesSaved'
import selectLanguageSlice from './slices/selectLanguageSlice'

export const store = configureStore({
    reducer: {
        locationData: locationDataSlice,
        isLoginOk: isLoginOkSlice,
        actualLocation: setLocationSlice,
        flagIsChangesSaved: flagIsChangesSavedSlice,
        selectLanguage: selectLanguageSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch