import CartItem from '@/Components/CartItem'

export default function Cart({ data, removeFromCart }) {
    return (
        <div>
            {data.map((item, index) => (
                <CartItem
                    key={item.id}
                    data={item}
                    removeFromCart={removeFromCart}
                />
            ))}
        </div>
    );
}