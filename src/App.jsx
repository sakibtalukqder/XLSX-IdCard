import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import KeepReact from './Components/KeepReact';

const App = () => {
  return (
    <div className='w-full mx-auto mt-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/keep' element={<KeepReact />} />
      </Routes>
    </div>
  );
};

export default App;