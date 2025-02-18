
import { Card, CardContent, CardHeader } from "@mui/material";

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
        <Card className="max-w-sm w-full rounded-md shadow-md">
            <CardHeader
                title="Recent Transaction"
                classes={{
                    title: "text-lg font-semibold",
                }}
                className="pb-0"
            />
            <CardContent className="pt-2">
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
