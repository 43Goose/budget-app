'use client';
import { BudgetType } from '@/lib/types';
import React, { useState } from 'react'
import Button from './ui/SiteButton';
import { generateBudgetId } from '@/lib/utils';
import Budget from './ui/Budget';
import { getAllBudgets } from '@/lib/cookies';

export default function BudgetList() {
    const [budgets, setBudgets] = useState<BudgetType[]>([]); // move list of budgets into client component and make this fetch initial budgets

    const addBudget = async () => {
        setBudgets([...budgets, { id: generateBudgetId(), info: { name: 'New Budget', items: [] } }]);
        console.log(await getAllBudgets());
    }

    return (
        <div className='relative w-full min-h-full bg-zinc-200 shadow-lg shadow-zinc-500'>
            <div className='w-full p-4'>
                {budgets.map((budget) => (
                    <Budget key={budget.id} defaultInfo={budget} />
                ))}
            </div>
            <div className='absolute bottom-0 p-4 w-full'>
                <Button text='Add Budget' clickFn={addBudget} />
            </div>
        </div>
    )
}
