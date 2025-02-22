
import { Card, CardContent } from "@mui/material";

import TransactionRow from "./TransactionRow";
import { CreditCard, Payment, Person } from "@mui/icons-material";

function RecentTransactions() {
    const transactions = [
        {
            icon: <CreditCard className="text-yellow-500" />,
            title: "Deposit from my Card",
            date: "28 January 2021",
            amount: "-$850",
            amountColor: "text-red-500",
        },
        {
            icon: <Payment className="text-blue-500" />,
            title: "Deposit Paypal",
            date: "25 January 2021",
            amount: "+$2,500",
            amountColor: "text-green-500",
        },
        {
            icon: <Person className="text-green-500" />,
            title: "Jemi Wilson",
            date: "21 January 2021",
            amount: "+$5,400",
            amountColor: "text-green-500",
        },
    ];



    return (
        <Card className="rounded-md shadow-md " sx={{ borderRadius: '16px', height: '250px' }}>
            <CardContent className="my-4">
                {transactions.map((tx, index) => (
                    <TransactionRow
                        key={index}
                        icon={tx.icon}
                        title={tx.title}
                        date={tx.date}
                        amount={tx.amount}
                        amountColor={tx.amountColor}
                    />
                ))}
            </CardContent>
        </Card>
    );
}

export default RecentTransactions;
