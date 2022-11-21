import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {app} from '../../firebase'
import {getDatabase, ref, set, get, child} from 'firebase/database'



export const getLocationData = createAsyncThunk(
    'location/getLocationData',
    async (locationPath) => {
        const dbRef = await ref(getDatabase(app))
        const locationData = await get(child(dbRef, `${locationPath.location}`))
            .then((snapshot) => snapshot.val())
            .catch((error) => {
                console.error(error)
            })
        return locationData
    }
)

const locationDataSlice = createSlice({
    name: 'location',
    initialState: {
        cards: [],
        events: [],
        loading: true,
        error: null
    },

    reducers: {
        updateEventsData: (state, action) => {
            state.events = state.events.concat(action.payload)
        },
        removeEventItemData: (state, action) => {
            state.events = action.payload
        }
    },
    extraReducers: {
        [getLocationData.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getLocationData.fulfilled]: (state, action) => {
            state.cards = action.payload.beer
            state.events = action.payload.events ? action.payload.events : []
            state.loading = !action.payload ?? false
            state.error = !action.payload ?? null
        },
        [getLocationData.rejected]: (state) => {
            state.error = true
            state.loading = false
        },
    }
})

export const {updateEventsData, removeEventItemData} = locationDataSlice.actions
export default locationDataSlice.reducer