'use client';
import { Budget } from '@/lib/types';
import React, { useState } from 'react'
import Button from './ui/SiteButton';
import { generateBudgetId } from '@/lib/utils';
import BudgetInfo from './ui/Budget';

export default function BudgetList() {
    const [budgets, setBudgets] = useState<Budget[]>([]);

    const addBudget = () => {
        setBudgets([...budgets, { id: generateBudgetId(), name: 'New Budget' }]);
    }

    return (
        <div className='relative w-full min-h-full bg-zinc-200 shadow-lg shadow-zinc-500'>
            <div className='w-full p-4'>
                {budgets.map((budget) => (
                    <BudgetInfo key={budget.id} defaultInfo={budget} />
                ))}
            </div>
            <div className='absolute bottom-0 p-4 w-full'>
                <Button text='Add Budget' clickFn={addBudget} />
            </div>
        </div>
    )
}
