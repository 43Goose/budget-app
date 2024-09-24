'use client';
import { BudgetItem } from '@/lib/types';
import React, { useState } from 'react'
import Item from './ui/BudgetItem';
import Button from './ui/SiteButton';

export default function BudgetScreen() {
    const [items, setItems] = useState<BudgetItem[]>([]);

    const addItem = () => {
        setItems([...items, { id: items.length, name: 'New Item', price: 0, quantity: 0 }]);
    }

    return (
        <div className='w-full min-h-full'>
            <div className='w-4/5 max-w-lg p-4 mx-auto bg-zinc-200 rounded-xl'>
                <div className='mb-6'>
                    {items.map((item) => (
                        <Item key={item.name} defaultInfo={item} />
                    ))}
                </div>
                <Button text='Add Item' clickFn={addItem} />
            </div>
        </div>
    )
}
