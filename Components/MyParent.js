'use client'

import React , {useState} from "react";
import MyChild from "@/Components/MyChild";

export default function MyParent() {
    const [state , setState] = useState(0)

    return (
        <div className="w-64">
            <div className="text-center text-8xl text-amber-200 border-e-fuchsia-300 border-4 rounded-xl bg-white p-8">
                {state}
            </div>
            <MyChild setData={setState}/>
            
        </div>
    );
}