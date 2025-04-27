
'use client'

import ButtonWrapper from '@/Components/BWrap'


export default function Button() {
    function clickHandler(data){
        alert(`Your Number is : ${data}`); 

    }
    return (
        <div className="flex flex-row items-center justify-start min-h-screen mx-auto mt-3">
            <ButtonWrapper>
                <button className="w-full h-full" onClick={clickHandler.bind(this,1)}>1</button>
            </ButtonWrapper>
            <ButtonWrapper>
                <button className="w-full h-full" onClick={clickHandler.bind(this,3)}>3</button>
            </ButtonWrapper>
            <ButtonWrapper>
                <button className="w-full h-full" onClick= {()=> clickHandler(7)}>7</button>
            </ButtonWrapper>
            <ButtonWrapper>
                <button className="w-full h-full" onClick= {()=> clickHandler(9)}>9</button>
            </ButtonWrapper>

        </div>
    );
}