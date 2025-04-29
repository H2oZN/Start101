'use client'

import React, { useState } from 'react'

export default function ChangeLaunge() {

    const [state, setState] = useState('Hello') 

    function handler (){
        if(state === 'Hello'){
            setState('สวัสดี')
        } else {
            setState('Hello')
        }
    }
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen mx-auto ">
            <div className="text-5xl my-4 text-gray-600">{state}</div>
            <button onClick={handler} className="py-2 px-4 w-32 text-white bg-amber-50 hover:bg-amber-400 active:ring-2 active:ring-blue-100 ring-offset-1 rounded-sm">
                {state === 'Hello' ? 'Change to Thai' : 'Change to English'}
            </button>
        </div>
    );
}