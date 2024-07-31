import { all } from "redux-saga/effects";
import { portfolioSaga } from "./portfolioSaga";

export function* rootSaga() {
    yield all([
        portfolioSaga(),
    ]);
};