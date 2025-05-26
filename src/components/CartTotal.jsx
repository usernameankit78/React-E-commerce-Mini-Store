import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-lg shadow-sm bg-white">
      {/* Section Title */}
      <div className="text-2xl text-center mb-4">
        <Title text1="CART" text2="TOTALS" />
      </div>

      {/* Totals Breakdown */}
      <div className="flex flex-col gap-4 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>
            {currency} {subtotal.toFixed(2)}
          </span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span>
            {currency} {delivery_fee.toFixed(2)}
          </span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>
            {currency} {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
