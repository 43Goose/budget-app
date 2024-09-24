'use client';
import React from 'react'

export default function Button({
    text,
    clickFn,
    link,
    size
}: {
    text: string;
    clickFn?: () => void;
    link?: string;
    size?: 'sm' | 'md' | 'lg';
}) {
    const smStyles = 'text-lg rounded-lg';
    const mdStyles = 'text-xl py-1 font-bold rounded-lg';
    const lgStyles = 'text-2xl py-2 font-bold rounded-xl';

    return (
        <a
            className={`block w-full text-center text-white bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer active:scale-95 ${size === 'sm' ? smStyles : size === 'md' ? mdStyles : size === 'lg' ? lgStyles : lgStyles}`}
            onClick={clickFn}
            href={link && link}
        >
            {text}
        </a>
    )
}
