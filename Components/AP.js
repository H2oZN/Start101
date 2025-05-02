'use client'
import { useState } from "react";
import Cart from '@/Components/Cart'
import Products from '@/Components/Products'

export default function Page() {
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
    
    return (
        <div></div>
    );
}