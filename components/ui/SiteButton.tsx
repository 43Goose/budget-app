'use client';
import clsx from 'clsx';
import React from 'react'

export default function Button({
    clickFn,
    link,
    variant,
    size,
    color,
    children
}: {
    clickFn?: () => void;
    link?: string;
    variant?: 'text' | 'outlined' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'success' | 'error';
    children: React.ReactNode;
}) {
    const colors = {
        'primary': {
            'main': ['bg-emerald-500', 'hover:bg-emerald-500'],
            'dark': ['bg-emerald-600', 'hover:bg-emerald-600']
        },
        'success': {
            'main': ['bg-blue-500', 'hover:bg-blue-500'],
            'dark': ['bg-blue-600', 'hover:bg-blue-600']
        },
        'error': {
            'main': ['bg-red-500', 'hover:bg-red-500'],
            'dark': ['bg-red-600', 'hover:bg-red-600']
        },
    }

    const bgColor = color ? colors[color] : colors.primary;

    const variants = {
        'text': `text-black bg-transparent ${bgColor.main[1]} hover:text-white`,
        'outlined': `text-black bg-transparent outline outline-2 ${bgColor.main[1]} hover:text-white`,
        'filled': `text-white ${bgColor.main[0]} ${bgColor.dark[1]}`
    }

    const sizes = {
        'sm': 'text-lg rounded-lg',
        'md': 'text-xl py-1 font-bold rounded-lg',
        'lg': 'text-2xl py-2 font-bold rounded-xl'
    }

    return (
        <a
            className={clsx(
                'block w-full text-center transition-colors select-none hover:cursor-pointer active:scale-95',
                variant ? variants[variant] : variants.filled,
                size ? sizes[size] : sizes.lg,
            )}
            onClick={clickFn}
            href={link && link}
        >
            {children}
        </a>
    )
}
