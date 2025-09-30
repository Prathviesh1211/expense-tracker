export interface Expense {
    id: string
    description: string
    amount: number
    category: string
    date: string // ISO string
    paymentMethod: string // new field
}