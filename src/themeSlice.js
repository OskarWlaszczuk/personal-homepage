import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkThemeState = state => state.theme;
export const selectIsDarkTheme = state => selectIsDarkThemeState(state).isDarkTheme;

export const themeReducer = themeSlice.reducer;