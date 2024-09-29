'use client';
import { BudgetType } from '@/lib/types';
import React from 'react'
import Button from './SiteButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

export default function Budget({ budget, viewFn, current }: { budget: BudgetType; viewFn: (id: string) => void; current: boolean }) {
    return (
        <div className={`w-full h-12 flex items-center justify-between px-4 rounded-xl ${current ? 'bg-emerald-50' : 'bg-white'}`}>
            <p className='text-2xl text-emerald-500 font-bold'>{budget.info.name}</p>
            <div className='flex items-center gap-2'>
                <div className='w-14'><Button size='md' clickFn={() => viewFn(budget.id)} >{'View'}</Button></div>
                <FontAwesomeIcon className='text-2xl text-zinc-300' icon={faGripVertical} />
            </div>
        </div>
    )
}
