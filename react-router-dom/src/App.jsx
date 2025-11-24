import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import PageNotfound from './pages/PageNotfound';
const App = () => {
  return (
    <div className='bg-blue-950 text-white'>
      <Navbar/>
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/product' element={<Product/>} >
<Route path='men' element={<Mens/>} />
<Route path='women' element={<Womens/>} />
</Route>
<Route path='*' element={<PageNotfound/>} />
    </Routes>
    </div>
  );
}

export default App;
