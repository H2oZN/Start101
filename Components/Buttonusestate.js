'use client'
import { useState } from "react";

import BWrap from "./BWrap";

export default function ButtonUS() {
    const [state, setState] = useState(0);
    function handler(){
        const latest = state+1
        setState(latest)
    }
    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen mx-auto">
            <div className="text-5xl my-4">{state}
                <BWrap><button onClick={handler}>click</button></BWrap>
            </div>
        </div>
    );
}