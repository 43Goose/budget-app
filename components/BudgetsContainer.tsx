'use client';
import BudgetList from '@/components/BudgetList';
import BudgetScreen from '@/components/BudgetScreen';
import { addBudgetCookie, deleteBudget, getAllBudgets, saveBudget } from '@/lib/cookies';
import { BudgetType } from '@/lib/types';
import { generateId } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export default function BudgetsContainer() {
    const [currentBudget, setCurrentBudget] = useState<string | null>(null);
    const [budgets, setBudgets] = useState<BudgetType[]>([]);

    useEffect(() => {
        const loadBudgets = async () => {
            const userBudgets = await getAllBudgets();

            if (userBudgets) {
                setBudgets([...userBudgets]);
            }
        }

        loadBudgets();
    }, [])

    const addBudget = async () => {
        const newBudget = { id: generateId(), info: { name: 'New Budget', items: [] } };
        setBudgets([...budgets, newBudget]);
        await addBudgetCookie(newBudget);
    }

    const removeBudget = async (id: string) => {
        const newBudgets = [...budgets];
        newBudgets.splice(newBudgets.findIndex(b => b.id === id), 1);

        await deleteBudget(id);
        setBudgets(newBudgets)
    }

    const save = async (id: string, newBudget: BudgetType) => {
        const newBudgets = [...budgets];
        newBudgets[newBudgets.findIndex(b => b.id === id)] = newBudget;

        await saveBudget(id, newBudget);
        setBudgets(newBudgets);
    }

    const viewBudget = (id: string) => {
        setCurrentBudget(id);
    }

    return (
        <div className='relative w-full min-h-dvh flex'>
            <div className='w-96 h-dvh'>
                {/* budget list */}
                <BudgetList budgets={budgets} currentBudget={currentBudget} addFn={addBudget} viewFn={viewBudget} />
            </div>
            <div className='grow min-h-full py-16'>
                {/* current budget screen */}
                {budgets.find((b) => b.id === currentBudget) ?
                    <BudgetScreen currentBudget={budgets.find((b) => b.id === currentBudget)!} saveFn={save} deleteFn={removeBudget} /> :
                    <div className='w-full h-full flex items-center justify-center'>
                        <h1 className='text-2xl font-bold'>Select a budget to view or edit.</h1>
                    </div>
                }
            </div>
        </div>
    )
}
