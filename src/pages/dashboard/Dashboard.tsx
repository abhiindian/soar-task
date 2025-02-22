import CreditCardComponent from "../../components/CreditCardComponent";
import RecentTransactions from "../../components/RecentTransactions";
import LargeCardWrapper from "../../components/CardWrapper/LargeCardWrapper";
import SmallCardWrapper from "../../components/CardWrapper/SmallCardWrapper";
import { Box } from "@mui/material";
import WeeklyActivityChart from "../../components/WeeklyActivityChart";
import PolarChart from "../../components/PolarChart";
import QuickTransfer from "../../components/QuickTransfer";
import BalanceHistoryChart from "../../components/BalanceHistoryChart";

export default function Dashboard() {

    const chartData = {
        labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
        datasets: [
            {
                label: 'Expenses',
                data: [30, 15, 20, 35],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const users = [
        {
            name: "Livia Bator",
            role: "CEO",
            avatar: "https://via.placeholder.com/48x48?text=L"
        },
        {
            name: "Randy Press",
            role: "Director",
            avatar: "https://via.placeholder.com/48x48?text=R"
        },
        {
            name: "Workman",
            role: "Designer",
            avatar: "https://via.placeholder.com/48x48?text=W"
        }
    ];
    const handleSend = (amount: number) => {
        console.log('Transferring:', amount);
    };



    const balanceHistory = [
        { month: "Jul", balance: 200 },
        { month: "Aug", balance: 400 },
        { month: "Sep", balance: 350 },
        { month: "Oct", balance: 750 },
        { month: "Nov", balance: 500 },
        { month: "Dec", balance: 650 },
        { month: "Jan", balance: 600 },
    ];
    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
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
                        <PolarChart data={chartData} height={270} />
                    </SmallCardWrapper>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    mb: 4
                }}>
                    <LargeCardWrapper title={"Quick Transfer"} flex={1}>
                        <QuickTransfer users={users} onSend={handleSend} defaultAmount={25.50} />
                    </LargeCardWrapper>
                    <SmallCardWrapper title={"Expense Statistics"} flex={2}>
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
                    <PolarChart data={chartData} height={270} />
                </SmallCardWrapper>
                <SmallCardWrapper title={"Weekly Activity"} flex={1}>
                    <WeeklyActivityChart />
                </SmallCardWrapper>
                <SmallCardWrapper title={"Expense Statistics"} flex={1}>
                    <PolarChart data={chartData} height={270} />
                </SmallCardWrapper>
            </Box >
        </>
    )
}