'use client';
import React from 'react'
import Button from './ui/SiteButton';
import Budget from './ui/Budget';
import { BudgetType } from '@/lib/types';
import { Reorder } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/budget-goose-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export default function BudgetList({
    budgets,
    currentBudget,
    addFn,
    viewFn,
    reorderFn,
    closeFn,
}: {
    budgets: BudgetType[];
    currentBudget: string | null;
    addFn: () => void;
    viewFn: (id: string) => void;
    reorderFn: (newOrder: BudgetType[]) => void;
    closeFn: () => void;
}) {

    return (
        <div className='relative w-full h-full pb-28 min-h-full flex flex-col bg-zinc-200 md:h-auto'>
            <div className='w-full pt-2 px-4 flex justify-between items-center'>
                <a href="/">
                    <Image src={logo} alt='site logo' className='w-12 h-12 md:w-16 md:h-16' />
                </a>
                <FontAwesomeIcon icon={faCircleXmark} className='text-3xl md:hidden' onClick={closeFn} />
            </div>
            <div className='w-full h-full p-4'>
                {budgets.length > 0 ?
                    <Reorder.Group axis='y' values={budgets} onReorder={reorderFn} className='max-h-full overflow-auto md:overflow-visible'>
                        {budgets.map((budget) => (
                            <Budget key={budget.id} budget={budget} viewFn={viewFn} current={budget.id === currentBudget} />
                        ))}
                    </Reorder.Group>
                    : <h1 className='text-center text-lg'>You have no budgets.<br></br>{'Click the "Add Budget" button to make one!'}</h1>
                }
            </div>
            <div className='absolute bottom-0 p-4 w-full'>
                <Button clickFn={addFn} >{'Add Budget'}</Button>
            </div>
        </div>
    )
}
