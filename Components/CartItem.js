export default function CartItem(data, removeFromCart) {
    return (
        <div>
            <div className="flex border-2 border-gray-300 bg-white justify-between mt-3 p-5">
                <div className="w-7/12">{data.data.ProductName}</div>
                <div className="2-7/12">{data.data.price}</div>
                <button className="w-3/12 hover:ring-blue-500 hover:ring-2 hover:rounded-b-sm active:bg-blue-400" onClick={removeFromCart.bind(this,data.data)}>Remove</button>
            </div>
        </div>
    );
}