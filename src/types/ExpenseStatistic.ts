export type ExpenseStatistic = {
    labels: string[]
    datasets: Dataset[]
}

export type Dataset = {
    label: string
    data: number[]
    backgroundColor: string[]
    borderColor: string[]
    borderWidth: number
}
