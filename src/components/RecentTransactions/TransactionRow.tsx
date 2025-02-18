type TransactionRowProps =
    { icon: React.ReactNode; title: string; date: string; amount: string; amountColor: string; }


function TransactionRow(transactionRowProps: Readonly<TransactionRowProps>) {
    const { icon, title, date, amount, amountColor } = transactionRowProps;
    return (
        <div className="flex items-center justify-between py-2 border-b last:border-b-0 border-gray-200">
            {/* Left section: Icon + Title + Date */}
            <div className="flex items-center">
                <div className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                    {icon}
                </div>
                <div>
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="text-xs text-gray-500">{date}</p>
                </div>
            </div>

            {/* Right section: Amount */}
            <div className={`text-sm font-semibold ${amountColor}`}>
                {amount}
            </div>
        </div>
    );
}

export default TransactionRow;
