'use client';
import { BudgetItem, BudgetType } from '@/lib/types';
import React, { useEffect, useState } from 'react'
import Item from './ui/BudgetItem';
import Button from './ui/SiteButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { generateId } from '@/lib/utils';
import { Reorder } from 'framer-motion';

export default function BudgetScreen({
    currentBudget,
    saveFn,
    deleteFn
}: {
    currentBudget: BudgetType;
    saveFn: (id: string, newBudget: BudgetType) => void;
    deleteFn: (id: string) => void;
}) {
    const [items, setItems] = useState<BudgetItem[]>(currentBudget.info.items);
    const [listOrder, setListOrder] = useState<number[]>(currentBudget.info.items.map((item, index) => index));
    const [name, setName] = useState(currentBudget.info.name);

    useEffect(() => {
        const loadCurrent = () => {
            if (currentBudget) {
                setName(currentBudget.info.name);
                setItems(currentBudget.info.items);
                setListOrder(currentBudget.info.items.map((item, index) => index));
            }
        }

        loadCurrent();
    }, [currentBudget])

    const addItem = () => {
        let id = generateId();
        const existingIds = items.map((i) => i.id);
        while (existingIds.includes(id)) { // Chances are very small that a duplicate is found but always good to check
            id = generateId();
        }

        setItems([...items, { id: id, name: 'New Item', price: 0, quantity: 0 }]);
    }

    const editItem = (id: string, change: { key: string, newValue: string | number }) => {
        const newItems = [...items];
        newItems[newItems.findIndex((i) => i.id === id)][change.key] = change.newValue;

        setItems(newItems);
    }

    const removeItem = (item: BudgetItem) => {
        const newItems = [...items];
        newItems.splice(newItems.indexOf(item), 1);

        setItems(newItems);
    }

    const handleSave = () => {
        if (currentBudget) {
            saveFn(currentBudget.id, { id: currentBudget.id, info: { name: name, items: items } });
        }
    }

    const handleDelete = () => {
        if (currentBudget) {
            deleteFn(currentBudget.id);
        }
    }

    return (
        <div className='w-full min-h-full'>
            <div className='w-4/5 max-w-2xl min-h-96 flex flex-col justify-between p-4 mx-auto bg-zinc-200 rounded-xl'>
                <div>
                    <input
                        className='appearance-none w-full px-1 mb-2 text-center text-2xl text-emerald-500 font-bold rounded-lg border-2 border-transparent outline-none bg-transparent transition-colors hover:border-black focus:bg-white focus:border-emerald-500'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className='mb-6'>
                        {items.length > 0 ?
                            <Reorder.Group axis='y' values={listOrder} onReorder={setListOrder}>
                                {listOrder.map(n => (
                                    <Item
                                        key={n}
                                        item={items[n]}
                                        orderInList={n}
                                        editFn={editItem}
                                        removeFn={() => removeItem(items[n])}
                                    />
                                ))}
                            </Reorder.Group>
                            : <h1 className='text-center text-lg'>This budget is empty.<br></br>Add some items to get started.</h1>
                        }
                    </div>
                </div>
                <div className='w-full flex'>
                    <div className='w-1/2'><Button clickFn={addItem} >{'Add Item'}</Button></div>
                    <div className='w-1/2 flex justify-end gap-2'>
                        <div className='w-12'>
                            <Button clickFn={handleSave} variant='text' color='success' >
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </Button>
                        </div>
                        <div className='w-12'>
                            <Button clickFn={handleDelete} variant='text' color='error' >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

