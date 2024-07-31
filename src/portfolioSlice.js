import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        repositories: [],
        status: "loading"
    },
    reducers: {
        fetchRepositories: () => { },
        fetchRepositoriesSuccess: (state, { payload: repositories }) => {
            state.repositories = repositories;
            state.status = "succes;"
        },
        fetchRepositoriesError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } = portfolioSlice.actions;

export const selectPortfolioState = state => state.portfolio;

export const selectRepositories = state => selectPortfolioState(state).repositories;
export const selectRepositoriesStatus = state => selectPortfolioState(state).status;

export const portfolioReducer = portfolioSlice.reducer;