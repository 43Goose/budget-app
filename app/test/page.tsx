'use client';
import { Reorder } from 'framer-motion'
import React, { useState } from 'react'

export default function Page() {
    const [items, setitems] = useState(['test1', 'test2', 'test3', 'test4']);
    const [pls, setpls] = useState([0, 1, 2, 3]);

    return (
        <main className='w-full h-dvh'>
            <div className='w-96 p-8'>
                <Reorder.Group axis='y' values={pls} onReorder={setpls}>
                    {pls.map(a => (
                        <Reorder.Item className='bg-emerald-500 my-2 p-2 rounded-xl text-lg text-white hover:cursor-pointer' key={a} value={a}>
                            <h1>{items[a]}</h1>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>
        </main>
    )
}
