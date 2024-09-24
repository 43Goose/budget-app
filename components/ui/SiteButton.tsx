'use client';
import React from 'react'

export default function Button({
    text,
    clickFn,
    link,
    noPadding
}: {
    text: string;
    clickFn?: () => void;
    link?: string;
    noPadding?: boolean
}) {
    return (
        <a
            className={`block w-full text-center text-2xl font-bold rounded-xl bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer active:scale-95 ${noPadding ? 'h-full' : 'py-2'}`}
            onClick={clickFn}
            href={link && link}
        >
            {text}
        </a>
    )
}
