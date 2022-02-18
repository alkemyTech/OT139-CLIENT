import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Example from './pages/Example';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<Example/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
