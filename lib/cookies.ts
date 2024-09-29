'use server';
import { cookies } from "next/headers";
import { BudgetType } from "./types";

export const addBudgetCookie = async (budget: BudgetType) => {
    if (await cookies().has('budgets')) {
        const currentBudgets = JSON.parse(await cookies().get('budgets')!.value);

        await cookies().set('budgets', JSON.stringify({ ...currentBudgets, [budget.id]: budget }));
    } else {
        await cookies().set('budgets', JSON.stringify({ [budget.id]: budget }));
    }
}

export const getAllBudgets = async () => {
    if (await cookies().has('budgets')) {
        const returnArray = [];
        const budgets = JSON.parse(await cookies().get('budgets')!.value);

        for (const b in budgets) {
            returnArray.push(budgets[b]);
        }
        return returnArray;
    } else {
        return;
    }
}

export const getBudgetById = async (id: string) => {
    if (await cookies().has('budgets')) {
        const budgets = JSON.parse(await cookies().get('budgets')!.value);

        return budgets[id] || undefined;
    } else {
        return;
    }
}

export const saveBudget = async (id: string, newBudget: BudgetType) => {
    const budgets = JSON.parse(await cookies().get('budgets')!.value);
    budgets[id] = newBudget;

    await cookies().set('budgets', JSON.stringify(budgets));
}

export const deleteBudget = async (id: string) => {
    const budgets = JSON.parse(await cookies().get('budgets')!.value);
    delete budgets[id];

    await cookies().set('budgets', JSON.stringify(budgets));
}