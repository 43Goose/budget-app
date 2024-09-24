'use client';
import { Budget } from '@/lib/types';
import React, { useState } from 'react'
import Button from './SiteButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

export default function BudgetInfo({ defaultInfo }: { defaultInfo: Budget; }) {
    const [name, setName] = useState<string>(defaultInfo.name);
    return (
        <div className='w-full h-12 flex items-center justify-between px-4 bg-white rounded-xl'>
            <p className='text-2xl text-emerald-500 font-bold'>{name}</p>
            <div className='flex items-center gap-2'>
                <div className='w-14'><Button text='View' size='md' /></div>
                <FontAwesomeIcon className='text-2xl text-zinc-300' icon={faGripVertical} />
            </div>
        </div>
    )
}
