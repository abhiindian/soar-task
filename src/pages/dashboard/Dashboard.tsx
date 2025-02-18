import BalanceHistoryChart from "../../components/BalanceHistoryChart";
import CreditCardComponent from "../../components/CreditCardComponent";
import PolarChart from "../../components/PolarChart";
import QuickTransfer from "../../components/QuickTransfer";
import RecentTransactions from "../../components/RecentTransactions";
import WeeklyActivityChart from "../../components/WeeklyActivityChart";

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
        { name: 'Livia Bator', role: 'CEO' },
        { name: 'Randy Press', role: 'Director' },
        { name: 'Workman', role: 'Designer' }
    ];

    const handleSend = (amount: number) => {
        console.log('Transferring:', amount);
        // Add your transfer logic here
    };



    const sampleData = [
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
            <div className="m-2 flex flex-col gap-10 md:flex-row md:gap-10">
                <CreditCardComponent
                    balance={100.50}
                    cardHolder={'Abhishek Chakravarty'}
                    validThru={'09/28'}
                    cardNumber={'894265452215515'}
                    type="black"
                />
                <CreditCardComponent
                    balance={100.50}
                    cardHolder={'Abhishek Chakravarty'}
                    validThru={'09/28'}
                    cardNumber={'894265452215515'}
                    type="white"
                />
                <RecentTransactions />
            </div>
            <div className="m-2 grid grid-cols-2 md:grid-cols-2 gap-10">
                <WeeklyActivityChart />
                <PolarChart data={chartData} />

            </div>
            <div className="m-2 grid grid-cols-2 md:grid-cols-2 gap-10">
                <QuickTransfer
                    users={users}
                    onSend={handleSend}
                    initialAmount={525.50}
                />
                <BalanceHistoryChart data={sampleData} title="My Balance History" />
            </div>
        </>
    )
}