import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './components/Category'

import Navbar from './components/Navbar';
import { Foods } from './pages/Foods';
import { Home } from './pages/Home';

function App() {
  return (
    <div className=''>
      <Navbar />
      <main className='py-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/foods' element={<Foods />} />
          <Route path='/report' element={<Category/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
