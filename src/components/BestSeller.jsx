import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { products } from '../assets/assets';
import Title from './Title';
import ProductItem from './Productitem';

function BestSeller() {
  const { product } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-16 px-4">
      {/* Title Section */}
      <div className="text-center text-3xl pb-4">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 m-auto text-sm md:text-base text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, mollitia veniam.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
