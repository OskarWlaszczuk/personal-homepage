import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "./fetchStatuses";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    repositories: [],
    status: loadingStatus,
  },
  reducers: {
    fetchRepositories: () => { },
    fetchRepositoriesSuccess: (state, { payload: repositories }) => {
      state.repositories = repositories;
      state.status = successStatus;
    },
    fetchRepositoriesError: (state) => {
      state.status = errorStatus;
    },
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = portfolioSlice.actions;

export const selectPortfolioState = (state) => state.portfolio;

export const selectRepositories = (state) =>
  selectPortfolioState(state).repositories;
export const selectRepositoriesStatus = (state) =>
  selectPortfolioState(state).status;

export const portfolioReducer = portfolioSlice.reducer;
