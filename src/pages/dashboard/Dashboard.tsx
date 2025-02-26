import CreditCardComponent from "../../components/CreditCardComponent";
import RecentTransactions from "../../components/RecentTransactions";
import LargeCardWrapper from "../../components/CardWrapper/LargeCardWrapper";
import SmallCardWrapper from "../../components/CardWrapper/SmallCardWrapper";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import WeeklyActivityChart from "../../components/WeeklyActivityChart";
import PolarChart from "../../components/PolarChart";
import QuickTransfer from "../../components/QuickTransfer";
import BalanceHistoryChart from "../../components/BalanceHistoryChart";
import { useEffect } from "react";
import { fetchDashboardDetails } from "./state";
import { useAppDispatch, useAppSelector } from "../../state/hook";
import { RootState } from "../../state/store";

export default function Dashboard() {
    const { loading, expenseStatistics, balanceHistory, quickTransferUsers } = useAppSelector((state: RootState) => state.dashboard); // Selecting the dashboard state from the store   
    const dispatch = useAppDispatch();    // Dispatch function to dispatch actions to the store

    useEffect(() => {
        dispatch(fetchDashboardDetails()); // Dispatching the fetchDashboardDetails action
    }, [dispatch]);


    const handleSend = (amount: number) => {
        console.log('Transferring:', amount);
    };

    return (
        <>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Box sx={{
                display: { xs: 'none', sm: 'block' },
                maxWidth: '82vw',
            }} >
                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    mb: 4
                }}>
                    <LargeCardWrapper title={"My Cards"} flex={2}>
                        <Box sx={{
                            display: 'flex',
                            gap: '1rem',
                            mb: 1
                        }}>
                            <CreditCardComponent
                                balance={100.50}
                                cardHolder={'Abhishek Chakravarty'}
                                validThru={'09/28'}
                                cardNumber={'894265452215515'}
                                type="black"
                                flex={1}
                            />
                            <CreditCardComponent
                                balance={100.50}
                                cardHolder={'Abhishek Chakravarty'}
                                validThru={'09/28'}
                                cardNumber={'894265452215515'}
                                type="white"
                                flex={1}
                            />
                        </Box>
                    </LargeCardWrapper>
                    <SmallCardWrapper title={"Recent Transactions"} flex={1}>
                        <RecentTransactions />
                    </SmallCardWrapper>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    mb: 4
                }}>
                    <LargeCardWrapper title={"Weekly Activity"} flex={2}>
                        <WeeklyActivityChart />
                    </LargeCardWrapper>
                    <SmallCardWrapper title={"Expense Statistics"} flex={1}>
                        <PolarChart data={expenseStatistics} height={270} />
                    </SmallCardWrapper>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    mb: 2
                }}>
                    <LargeCardWrapper title={"Quick Transfer"} flex={1}>
                        <QuickTransfer users={quickTransferUsers} onSend={handleSend} defaultAmount={25.50} />
                    </LargeCardWrapper>
                    <SmallCardWrapper title={"Balance History"} flex={2}>
                        <BalanceHistoryChart data={balanceHistory} />
                    </SmallCardWrapper>
                </Box>
            </Box>
            <Box sx={{
                display: { xs: 'flex', sm: 'none' },
                flexDirection: 'column',
                rowGap: 2,
                maxWidth: '92vw',
            }}>
                <Box sx={{ flex: 1, scrollbarWidth: 'thin' }}>
                    <LargeCardWrapper title={"My Cards"} flex={1}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flex: 1,
                            gap: '1rem',
                            mb: 1,
                            overflowx: 'scroll',
                            scrollbarWidth: 'thin'
                        }}>
                            <CreditCardComponent
                                balance={100.50}
                                cardHolder={'Abhishek Chakravarty'}
                                validThru={'09/28'}
                                cardNumber={'894265452215515'}
                                type="black"
                                flex={1}
                            />
                            <CreditCardComponent
                                balance={100.50}
                                cardHolder={'Abhishek Chakravarty'}
                                validThru={'09/28'}
                                cardNumber={'894265452215515'}
                                type="white"
                                flex={1}
                            />
                        </Box>
                    </LargeCardWrapper>
                </Box>
                <SmallCardWrapper title={"Recent Transactions"} flex={1}>
                    <RecentTransactions />
                </SmallCardWrapper>
                <SmallCardWrapper title={"Weekly Activity"} flex={1}>
                    <WeeklyActivityChart />
                </SmallCardWrapper>
                <SmallCardWrapper title={"Expense Statistics"} flex={1}>
                    <PolarChart data={expenseStatistics} height={270} />
                </SmallCardWrapper>
                <SmallCardWrapper title={"Quick Transfer"} flex={1}>
                    <QuickTransfer users={quickTransferUsers} onSend={handleSend} defaultAmount={25.50} />
                </SmallCardWrapper>
                <SmallCardWrapper title={"Balance History"} flex={1}>
                    <BalanceHistoryChart data={balanceHistory} />
                </SmallCardWrapper>
            </Box >
        </>
    )
}