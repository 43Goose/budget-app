'use server';
import { cookies } from "next/headers";
import { BudgetType } from "./types";

export const addBudgetCookie = async (budget: BudgetType) => {
    if (await cookies().has('budgets')) {
        const currentBudgets = JSON.parse(await cookies().get('budgets')!.value);

        await cookies().set('budgets', JSON.stringify({ ...currentBudgets, budget }));
    } else {
        await cookies().set('budgets', JSON.stringify({ budget }));
    }
}

export const getAllBudgets = async () => {
    if (await cookies().has('budgets')) {
        return await cookies().get('budgets');
    } else {
        return {};
    }
}

export const saveCookie = (key: string, value: string) => {
    cookies().set(key, value);
}

export const getCookie = async (key: string) => {
    return await cookies().get(key);
}