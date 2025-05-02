'use client'
import { useState } from "react";
import Cart from '@/Components/Cart'
import Product from '@/Components/Products'


export default function AllProducts() {
    const data = [
        {id: 1, productName: "Product 1", price: 10},
        {id: 2, productName: "Product 2", price: 20},
        {id: 3, productName: "Product 3", price: 30},
    ]
    const [productsInCart , setProductsInCart] = useState([])
    const addToCart = (product) => {
        const updatedCart = [...productsInCart]
        const index = productsInCart.findIndex(item => product.id === item.id)
        if (index !== -1){
            updatedCart[index] = {
                id: product.id,
                ProductName : product.productName,
                price : product.price , 
                count : updatedCart[index].count+1
            }
        }else{
            updatedCart.push({
                id: product.id,
                ProductName : product.productName,
                price : product.price , 
                count : 1
            })
        }
        setProductsInCart(updatedCart)
    }

    const removeFromCart = (product) => {
        const updatedCart = [...productsInCart]
        const index = productsInCart.findIndex(item=>product.id === item.id)
        if (index !== -1){
            updatedCart.splice(index,1)
            setProductsInCart(updatedCart)
        }
    }
    return (
        <div className="flex flex-col items-start justify-start sm:flex-row sm:justify-around min-h-screen w-full">
            <div className="flex flex-col  w-full sm:w-6/12 border-2 border-gray-400 p-3 sm:-3 shadow-md">
            <h3>Products</h3>
            {
                data.map((item) => {
                    return< Product
                    key={item.id}
                    data={item}
                    addToCart={addToCart}
                    />
                })
            }
            </div>
            <div className="flex flex-col w-full mt-3 sm:w-6/13 border-2 border-gray-400 p-3 shadow-md">
            <h3>Cart</h3>
            <Cart
            data ={productsInCart}
            removeFromCart={removeFromCart}
            />
            <div className="flex justify-center items-center text-red-500 pb-5">
                No Product In Cart
            </div>
            </div>
        </div>
    );
}