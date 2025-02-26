import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BalanceDetail, ExpenseStatistic, UserDetail } from "../../types";


type DashboardState = {
    expenseStatistics: ExpenseStatistic;
    balanceHistory: BalanceDetail[];
    quickTransferUsers: UserDetail[];
    loading: boolean;
    error: string;
}

type DashboardStatePayload = {
    expenseStatistics: ExpenseStatistic;
    balanceHistory: BalanceDetail[];
    quickTransferUsers: UserDetail[];
}

const initialState: DashboardState = {
    loading: false,
    error: "",
    expenseStatistics: {
        labels: [],
        datasets: []
    },
    balanceHistory: [],
    quickTransferUsers: []
}


const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        fetchDashboardDetails: (state: DashboardState) => {
            state.loading = true;
        },
        fetchDashboardDetailsSuccess: (state: DashboardState, action: PayloadAction<DashboardStatePayload>) => {
            state.loading = false;
            state.expenseStatistics = action.payload.expenseStatistics;
            state.balanceHistory = action.payload.balanceHistory;
            state.quickTransferUsers = action.payload.quickTransferUsers;
        },
        setError: (state: DashboardState, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {
    setError,
    fetchDashboardDetails,
    fetchDashboardDetailsSuccess,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
