import { spawn } from "redux-saga/effects";
import * as dashboardSaga from "../pages/dashboard/saga";

export default function* rootSaga() {
    yield spawn(dashboardSaga.dashboardSaga); // Forking the dashboard saga
}