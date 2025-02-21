import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

type BalanceHistoryChartProps = {
    data: { month: string; balance: number }[];
    title?: string;
};

const BalanceHistoryChart = ({ data, title = "Balance History" }: BalanceHistoryChartProps) => {
    return (
        <div style={{ width: "100%", margin: "0 auto" }}>
            <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>{title}</h3>
            {/* ResponsiveContainer makes the chart scale with its parent container */}
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    {/* Gradient for the area fill */}
                    <defs>
                        <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4680FE" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#4680FE" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip cursor={{ stroke: "#4680FE", strokeWidth: 1, strokeDasharray: "3 3" }} />
                    <Legend />

                    <Area
                        type="monotone"
                        dataKey="balance"
                        stroke="#4680FE"
                        strokeWidth={3}
                        fill="url(#balanceGradient)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BalanceHistoryChart;
