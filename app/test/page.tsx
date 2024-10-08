'use client';
import { Reorder } from 'framer-motion'
import React, { useState } from 'react'

export default function Page() {
    const [items, setitems] = useState([{ name: 'test1', value: 1 }, { name: 'test2', value: 2 }, { name: 'test3', value: 3 }, { name: 'test4', value: 4 }]);

    const test = (newItems: { name: string, value: number }[]) => {
        console.log(newItems);
        setitems(newItems);
    }

    return (
        <main className='w-full h-dvh'>
            <div className='w-96 p-8'>
                <Reorder.Group axis='y' values={items} onReorder={test}>
                    {items.map(i => (
                        <Reorder.Item className='bg-emerald-500 my-2 p-2 rounded-xl text-lg text-white hover:cursor-pointer' key={i.name} value={i}>
                            <h1>{i.value}</h1>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>
        </main>
    )
}
