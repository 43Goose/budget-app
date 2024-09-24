'use client';
import { BudgetItem } from '@/lib/types'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faMinus, faMultiply, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Item({ defaultInfo }: { defaultInfo: BudgetItem; }) {
    const [name, setName] = useState<string>(defaultInfo.name);
    const [price, setPrice] = useState<number>(defaultInfo.price);
    const [quantity, setQuantity] = useState<number>(defaultInfo.quantity);

    return (
        <div className='w-full h-12 flex items-center justify-between px-4 text-xl bg-slate-800 rounded-xl'>
            <div className='flex items-center gap-2'>
                <p>{name}</p>
                <FontAwesomeIcon icon={faMultiply} />
                <div className='flex items-center gap-4'>
                    <p
                        className='pl-4 pr-1 rounded-lg border-2 outline-none transition-colors focus:border-emerald-500'
                        contentEditable
                        onInput={(e) => setQuantity(Number(e.currentTarget.textContent))}
                    >{quantity}</p>
                    <div className='hover:cursor-pointer' onClick={() => setQuantity(quantity - 1)}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div className='hover:cursor-pointer' onClick={() => setQuantity(quantity + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faDollar} />
                <p
                    className='pl-4 pr-1 rounded-lg border-2 outline-none transition-colors focus:border-emerald-500'
                    contentEditable
                    onInput={(e) => setPrice(Number(e.currentTarget.textContent))}
                >{price}</p>
            </div>
        </div>
    )
}
