'use client';
import React from 'react'
import Button from './ui/SiteButton';
import Budget from './ui/Budget';
import { BudgetType } from '@/lib/types';

export default function BudgetList({ budgets, currentBudget, addFn, viewFn }: { budgets: BudgetType[]; currentBudget: string | null; addFn: () => void; viewFn: (id: string) => void }) {

    return (
        <div className='relative w-full min-h-full bg-zinc-200 shadow-lg shadow-zinc-500'>
            <div className='w-full p-4 flex flex-col gap-2'>
                {budgets.map((budget) => (
                    <Budget key={budget.id} budget={budget} viewFn={viewFn} current={budget.id === currentBudget} />
                ))}
            </div>
            <div className='absolute bottom-0 p-4 w-full'>
                <Button clickFn={addFn} >{'Add Budget'}</Button>
            </div>
        </div>
    )
}
