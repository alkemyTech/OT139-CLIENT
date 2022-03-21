import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import { Footer } from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
