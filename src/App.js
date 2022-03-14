import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
