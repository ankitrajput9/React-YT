import React from 'react';
import { Link } from 'react-router-dom';
const Product = () => {
  return (
       <div className="flex flex-col justify-center items-center min-h-screen " >
        <h1 className='text-5xl font-bold '>Products</h1>
        <div className='flex gap-5'>
          <Link to='/product/men'>Men</Link>
          <Link to='/product/women'>Women</Link>

        </div>
    {/* <img className='h-screen' src="/product.svg" alt="" /> */}
    </div>
  );
}

export default Product;
