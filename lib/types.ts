export interface BudgetType {
    id: string;
    info: {
        name: string;
        items: BudgetItem[];
    }
}

export interface BudgetItem {
    [key: string]: string | number;
    id: string;
    name: string;
    price: number;
    quantity: number;
}