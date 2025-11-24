import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex justify-between p-5 sticky top-0 bg-gray-300 opacity-70 text-black' >
      <h1 className='text-3xl font-bold '>Logo</h1>
      <div className='text-lg font-semibold underline flex gap-6' >
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>

      </div>
    </div>
  );
}

export default Navbar;
