import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../reducers/userSlice.ts";
import {UserApi} from '../services/UserApi.ts'

const rootReducer = combineReducers({
    users: userSlice.reducer,
    [UserApi.reducerPath]: UserApi.reducer
})

export const setupStore =  () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(UserApi.middleware),
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']