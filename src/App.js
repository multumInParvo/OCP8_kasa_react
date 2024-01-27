import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Housing from './pages/Housing';
import NotFoundPage from './pages/404';
import About from './pages/About';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
