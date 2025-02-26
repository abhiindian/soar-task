import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getBalanceHistory, getExpenseStatistics, getQuickTransferUsers } from './services';
import { fetchDashboardDetails, fetchDashboardDetailsSuccess, setError } from './state';
import { BalanceDetail, ExpenseStatistic, UserDetail } from '../../types';
import { AxiosResponse } from 'axios';


function* fetchDashboardDetailsSaga() {
    try {
        const [expenseStatistics, balanceHistory, quickTransferUser]: [
            AxiosResponse<ExpenseStatistic>,
            AxiosResponse<BalanceDetail[]>,
            AxiosResponse<UserDetail[]>
        ] = yield all([
            call(getExpenseStatistics),
            call(getBalanceHistory),
            call(getQuickTransferUsers)
        ]);
        yield put(fetchDashboardDetailsSuccess({
            expenseStatistics: expenseStatistics.data,
            balanceHistory: balanceHistory.data,
            quickTransferUsers: quickTransferUser.data
        }));
    } catch (error) {
        console.error('Error fetching dashboard details:', error);
        yield put(setError('Error occurred while fetching dashboard details'));
    }
}

export function* dashboardSaga() {
    yield takeLatest(fetchDashboardDetails, fetchDashboardDetailsSaga);
}