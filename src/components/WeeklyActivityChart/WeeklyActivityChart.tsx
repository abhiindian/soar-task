import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WeeklyActivityChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        if (chartRef.current !== null) {
            chartInstance.current = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    datasets: [
                        {
                            label: 'Deposit',
                            data: [230, 120, 250, 340, 220, 240, 330],
                            backgroundColor: '#3B82F6',
                            borderRadius: 8,
                        },
                        {
                            label: 'Withdraw',
                            data: [460, 340, 320, 460, 120, 380, 390],
                            backgroundColor: '#000000',
                            borderRadius: 8,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Deposit and Withdraw Overview' },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { stepSize: 100 },
                        }
                    }
                }
            });
        }
    }, []);

    return (
        <div>
            <canvas ref={chartRef} className="p-4 bg-white rounded-2xl shadow-lg" />
        </div>
    );
};

export default WeeklyActivityChart;
