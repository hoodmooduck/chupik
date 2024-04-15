import {UserType} from "../types/userType.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User {
    users: UserType[],
    isLoading: boolean,
    error: string,
}

const initialState: User = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        addUsers(state: User, action: PayloadAction<UserType[]>) {
            state.users = [...state.users, ...action.payload];
        },
    }
})

export const {addUsers} = userSlice.actions;
export default userSlice.reducer;