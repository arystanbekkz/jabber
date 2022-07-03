import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        user: JSON.parse(sessionStorage.getItem('user')) || null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            sessionStorage.setItem('user', JSON.stringify(state.user));
        },
        logout: (state) => {
            state.user = null;
            sessionStorage.setItem('user', 'null');
        },
    },
});

export const { login, logout } = usersSlice.actions;

export const selectUser = state => state.user.user;

export default usersSlice.reducer;