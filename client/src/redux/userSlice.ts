import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logInStart: (state:any) => {
            state.loading = true;
            state.error = false;
        },
        logInSuccess: (state:any, action:any) => {
            state.currentUser = action.payload.user;
            state.loading = false;
        },
        logInFailure: (state:any, action:any) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOut: (state:any) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        }
    },
});

export const {
    logInStart,
    logInSuccess,
    logInFailure,
    signOut,
} = userSlice.actions;

export default userSlice.reducer;