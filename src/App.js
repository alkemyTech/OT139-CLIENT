import React from 'react';
<<<<<<< HEAD
import './App.css';
import Counter from './features/counter'
import Slider from './components/Slider';
=======
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
>>>>>>> main

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
