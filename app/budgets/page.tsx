'use client';
import Item from '@/components/ui/BudgetItem';
import Button from '@/components/ui/SiteButton'
import { BudgetItem } from '@/lib/types';
import React, { useState } from 'react'

export default function Budgets() {
    const [items, setItems] = useState<BudgetItem[]>([]);

    const addItem = () => {
        setItems([...items, { id: items.length, name: 'New Item', price: 0, quantity: 0 }]);
    }

    return (
        <main className='min-h-dvh'>
            <div className='relative w-full min-h-dvh flex'>
                <div>
                    {/* budget list */}
                </div>
                <div className='grow min-h-full py-16'>
                    {/* current budget screen (default asks user to select a budget) */}
                    <div className='w-4/5 max-w-lg p-4 mx-auto bg-zinc-500 rounded-xl'>
                        <div className='mb-6'>
                            {items.map((item) => (
                                <Item key={item.name} defaultInfo={item} />
                            ))}
                        </div>
                        <Button text='Add Item' clickFn={addItem} />
                    </div>
                </div>
            </div>
        </main>
    )
}
