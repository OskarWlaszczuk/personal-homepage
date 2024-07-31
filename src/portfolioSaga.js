import { call, put, takeLatest } from "redux-saga/effects";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from "./portfolioSlice";
import { getRepositories } from "./getRepositories";

function* fetchRepositoriesHandler() {
    try {
        const repositories = yield call(getRepositories);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch {
        yield put(fetchRepositoriesError());
    }
};

export function* portfolioSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};