'use client';
import { BudgetItem } from '@/lib/types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faMinus, faMultiply, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Button from './SiteButton';
import { Reorder } from 'framer-motion';

export default function Item({
    item,
    editFn,
    removeFn,
}: {
    item: BudgetItem;
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
        <Reorder.Item
            value={item}
            className='relative w-full h-auto py-1 my-2 flex flex-col justify-between gap-1 px-4 text-xl bg-white rounded-xl hover:cursor-grab active:cursor-grabbing md:h-12 md:py-0 md:flex-row md:gap-0'
            style={{ touchAction: "none" }}
        >
            <input
                className='appearance-none w-32 pl-1 rounded-lg border-2 border-transparent outline-none transition-colors hover:border-black focus:border-emerald-500'
                type='text'
                value={item.name}
                onChange={(e) => changeName(e.target.value)}
            />
            <div className='grow flex items-center justify-between'>
                <div className='flex items-center gap-1 md:gap-2'>
                    <FontAwesomeIcon className='text-emerald-500' icon={faMultiply} />
                    <div className='flex items-center gap-2 md:gap-4'>
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
                <div className='flex items-center gap-1 md:gap-2'>
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
            </div>
        </Reorder.Item>
    )
}
