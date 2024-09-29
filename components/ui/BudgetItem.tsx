'use client';
import { BudgetItem } from '@/lib/types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faMinus, faMultiply, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Button from './SiteButton';
import { Reorder } from 'framer-motion';

export default function Item({
    item,
    orderInList,
    editFn,
    removeFn,
}: {
    item: BudgetItem;
    orderInList: number;
    editFn: (id: string, change: { key: string; newValue: string | number; }) => void;
    removeFn: () => void;
}) {
    const changeName = (newName: string) => {
        editFn(item.id, { key: 'name', newValue: newName });
    }

    const changeQuantity = (newQuantity: number) => {
        editFn(item.id, { key: 'quantity', newValue: newQuantity });
    }

    const changePrice = (newPrice: number) => {
        editFn(item.id, { key: 'price', newValue: newPrice });
    }

    return (
        <Reorder.Item value={orderInList} className='w-full h-12 my-2 flex items-center justify-between px-4 text-xl bg-white rounded-xl hover:cursor-grab' >
            <div className='flex items-center gap-2'>
                <input
                    className='appearance-none w-32 pl-1 rounded-lg border-2 border-transparent outline-none transition-colors hover:border-black focus:border-emerald-500'
                    type='text'
                    value={item.name}
                    onChange={(e) => changeName(e.target.value)}
                />
                <FontAwesomeIcon className='text-emerald-500' icon={faMultiply} />
                <div className='flex items-center gap-4'>
                    <input
                        className='appearance-none w-9 pr-1 text-right rounded-lg border-2 border-black outline-none transition-colors focus:border-emerald-500'
                        type='number'
                        value={item.quantity}
                        onChange={(e) => changeQuantity(Number(e.target.value))}
                    />
                    <div className='text-emerald-500 hover:cursor-pointer' onClick={() => changeQuantity(item.quantity - 1)}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div className='text-emerald-500 hover:cursor-pointer' onClick={() => changeQuantity(item.quantity + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon className='text-emerald-500' icon={faDollar} />
                <input
                    className='appearance-none w-9 pr-1 text-right rounded-lg border-2 border-black outline-none transition-colors focus:border-emerald-500'
                    type='number'
                    value={item.price}
                    onChange={(e) => changePrice(Number(e.target.value))}
                />
                <div className='w-9'>
                    <Button clickFn={removeFn} size='md' variant='text' color='error' >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                </div>
            </div>
        </Reorder.Item>
    )
}
