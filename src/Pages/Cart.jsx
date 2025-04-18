import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, clearCart } from '../Redux/Slices/ShoppingcartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.DisplayShopItem);

  const handleIncrement = (item) => {
    dispatch(add(item));
  };

  const handleDecrement = (id) => {
    dispatch(remove(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg">Total Items: {totalQuantity}</p>
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item)}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
              <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-right">
        <p className="text-2xl font-bold">
          Total: ${totalAmount.toFixed(2)}
        </p>
        <button
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          onClick={() => alert('Checkout functionality coming soon!')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;