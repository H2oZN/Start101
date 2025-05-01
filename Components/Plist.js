'use client'

import React, { useState } from 'react'

export default function Plist() {
    const productsData = [
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            
        },
        {
            id: 2,
            name: 'Product 2',
            price: 15.99,
            
        },
        {
            id: 3,
            name: 'Product 3',
            price: 20.99,
            
        },
    ];

    const [products, setProducts] = useState(productsData);

    function deleteHandler(id) {
        const index = products.findIndex(item => item.id === id);
        if (index !== -1) {
            const UpdateProduct = [...products];
            UpdateProduct.splice(index, 1);
            setProducts(UpdateProduct);
        }
    }

    if (products.length === 0) {
        return (
            <div className="text-red-500 text-2xl flex flex-col justify-center items-center w-screen h-screen mx-auto">
                No products available
                <div className="flex flex-col justify-center items-center w-screen h-screen mx-auto">
                <button onClick={() => setProducts(productsData)} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Reset</button>
            </div>
            </div>
            
        )
    }
    return (
        <div>
            <div className="flex flex-col justify-center items-center w-screen h-screen mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col justify-center items-center w-1/2 h-1/2 mx-auto my-4  p-4 rounded-lg shadow-md">
                       
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-gray-700">${product.price.toFixed(2)}</p>
                        <button onClick={() => deleteHandler(product.id)} className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center w-screen h-screen mx-auto">
                <button onClick={() => setProducts(productsData)} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Reset</button>
            </div>
        </div>
    );
}
