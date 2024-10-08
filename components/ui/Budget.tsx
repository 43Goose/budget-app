'use client';
import { BudgetType } from '@/lib/types';
import React, { useState } from 'react'
import Button from './SiteButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { Reorder, useDragControls } from 'framer-motion';

export default function Budget({ budget, viewFn, current }: { budget: BudgetType; viewFn: (id: string) => void; current: boolean }) {
    const controls = useDragControls();
    const [isDragging, setIsDragging] = useState(false);

    return (
        <Reorder.Item
            value={budget}
            className={`w-full h-12 flex items-center justify-between px-4 my-2 rounded-xl ${current ? 'bg-emerald-50' : 'bg-white'}`}
            dragListener={false}
            dragControls={controls}
            style={isDragging ? { touchAction: "none" } : {}}
        >
            <p className='text-2xl text-emerald-500 font-bold select-none'>{budget.info.name}</p>
            <div className='flex items-center gap-2'>
                <div className='w-14'><Button size='md' clickFn={() => viewFn(budget.id)} >{'View'}</Button></div>
                <FontAwesomeIcon
                    className='text-2xl text-zinc-300 hover:cursor-grab active:cursor-grabbing'
                    icon={faGripVertical}
                    onPointerDown={(e) => { controls.start(e); setIsDragging(true); }}
                    onPointerUp={() => setIsDragging(false)}
                />
            </div>
        </Reorder.Item>
    )
}
