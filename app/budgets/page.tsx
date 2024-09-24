import BudgetList from '@/components/BudgetList'
import BudgetScreen from '@/components/BudgetScreen'
import React from 'react'

export default function Budgets() {

    return (
        <main className='min-h-dvh'>
            <div className='relative w-full min-h-dvh flex'>
                <div className='w-96 h-dvh'>
                    {/* budget list */}
                    <BudgetList />
                </div>
                <div className='grow min-h-full py-16'>
                    {/* current budget screen (default asks user to select a budget) */}
                    <BudgetScreen />
                </div>
            </div>
        </main>
    )
}
