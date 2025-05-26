import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { Navigate } from 'react-router-dom';

function Cart() {
  const { products, currency, cartItems, removeFromCart, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const temData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item]) {
          temData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(temData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) =>
              product._id.toString() === item._id.toString()
            );

            if (!productData) return <p key={index}>Product not found</p>;

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img
                    className='w-16 sm:w-20'
                    src={productData.image?.[0] || '/placeholder.png'}
                    alt={productData.name}
                  />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <p className='text-sm'>Size: {item.size}</p>
                    <p className='text-sm'>Qty: {item.quantity}</p>
                    <p className='text-sm'>
                      Price: {currency} {productData.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeFromCart(item._id, item.size)}
                      className="text-sm text-gray-500 mt-2"
                    >
                      Remove item
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm px-8 my-8 py-3'>
             PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
