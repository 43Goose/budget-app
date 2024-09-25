export interface BudgetType {
    id: string;
    info: {
        name: string;
        items: BudgetItem[];
    }
}

export interface BudgetItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}