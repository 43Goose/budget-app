'use client';
import BudgetList from '@/components/BudgetList';
import BudgetScreen from '@/components/BudgetScreen';
import { addBudgetCookie, deleteBudget, getAllBudgets, reorderBudgets, saveBudget } from '@/lib/cookies';
import { BudgetType } from '@/lib/types';
import { generateId } from '@/lib/utils';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export default function BudgetsContainer() {
    const [currentBudget, setCurrentBudget] = useState<string | null>(null);
    const [budgets, setBudgets] = useState<BudgetType[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const loadBudgets = async () => {
            const userBudgets = await getAllBudgets();

            if (userBudgets) {
                setBudgets([...userBudgets]);
            }
        }

        loadBudgets();
    }, [])

    const addBudget = async () => {
        const newBudget = { id: generateId(), info: { name: 'New Budget', items: [] } };
        setBudgets([...budgets, newBudget]);
        await addBudgetCookie(newBudget);
    }

    const removeBudget = async (id: string) => {
        const newBudgets = [...budgets];
        newBudgets.splice(newBudgets.findIndex(b => b.id === id), 1);

        await deleteBudget(id);
        setBudgets(newBudgets)
    }

    const save = async (id: string, newBudget: BudgetType) => {
        const newBudgets = [...budgets];
        newBudgets[newBudgets.findIndex(b => b.id === id)] = newBudget;

        await saveBudget(id, newBudget);
        setBudgets(newBudgets);
    }

    const reorder = async (newOrder: BudgetType[]) => {
        await reorderBudgets(newOrder);
        setBudgets(newOrder);
    }

    const viewBudget = (id: string) => {
        setCurrentBudget(id);
    }

    return (
        <div className='relative w-full min-h-dvh overflow-hidden md:overflow-auto md:flex'>
            <div
                className='fixed w-16 h-16 flex items-center pl-9 -left-8 top-0 bottom-0 my-auto rounded-full bg-zinc-400 md:hidden'
                onClick={() => setMenuOpen(true)}
            >
                <FontAwesomeIcon icon={faChevronRight} className='text-2xl text-white' />
            </div>
            <div className={`absolute w-dvw h-dvh transition-transform z-10 md:static md:w-96 md:h-auto md:min-h-dvh ${!menuOpen && '-translate-x-full md:translate-x-0'}`} >
                {/* budget list */}
                <BudgetList budgets={budgets} currentBudget={currentBudget} addFn={addBudget} viewFn={viewBudget} reorderFn={reorder} closeFn={() => setMenuOpen(false)} />
            </div>
            <div className={`grow min-h-full py-16 ${menuOpen && 'h-dvh overflow-hidden'}`}>
                {/* current budget screen */}
                {budgets.find((b) => b.id === currentBudget) ?
                    <BudgetScreen currentBudget={budgets.find((b) => b.id === currentBudget)!} saveFn={save} deleteFn={removeBudget} /> :
                    <div className='w-full h-full flex items-center justify-center'>
                        <h1 className='text-2xl font-bold'>Select a budget to view or edit.</h1>
                    </div>
                }
            </div>
        </div>
    )
}
