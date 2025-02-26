import { AxiosResponse } from "axios";
import apiClient from "../../service/apiClient";
import { BalanceDetail, ExpenseStatistic, UserDetail } from "../../types";

export async function getExpenseStatistics(): Promise<AxiosResponse<ExpenseStatistic> | string> {
    try {
        throw new Error('Not implemented');
        const result = await apiClient.get('api/ExpenseStatistics');
        return result;
    } catch (error) {
        console.error('Error fetching expense statistics:', error);
        return 'Error fetching expense statistics';
    }
}

export async function getBalanceHistory(): Promise<AxiosResponse<BalanceDetail[]> | string> {
    try {
        const result = await apiClient.get('api/BalanceHistory');
        return result;
    } catch (error) {
        console.error('Error fetching balance history:', error);
        return 'Error fetching balance history';
    }
}

export async function getQuickTransferUsers(): Promise<AxiosResponse<UserDetail[]> | string> {
    try {
        const result = await apiClient.get('api/QuickTransferUsers');
        return result;
    } catch (error) {
        console.error('Error fetching quick transfer users:', error)
        return 'Error fetching quick transfer users';
    }
}