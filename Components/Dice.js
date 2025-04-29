'use client'
import React, { useState } from 'react'

export default function Dice() {
    const [dice, setDice] = useState(null)
    const [isLoad, setIsLoad] = useState(false)

    function handleClick() {
        setIsLoad(true)
        setTimeout(() => {
            const random = Math.floor(Math.random() * 6) + 1
            setDice(random)
            setIsLoad(false)
        }, 1000)
    }

    if (isLoad)
        return (
            <div className="text-red-500 text-2xl flex flex-col justify-center items-center w-screen h-screen mx-auto">
                Loading...
            </div>
        )

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen mx-auto">
            <div className="py-2 px-4 text-white text-center bg-blue-400 hover:bg-blue-500 active:ring-2 active:ring-blue-500 ring-offset-1 rounded-sm">
                <button onClick={handleClick}>Dice</button>
            </div>
            {dice !== null && (
                <div className="text-5xl my-4 text-gray-600">
                    {dice} is {dice >= 4 ? 'high' : 'low'}
                </div>
            )}
        </div>
    )
}
