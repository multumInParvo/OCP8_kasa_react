import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/404';
import About from './pages/About';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
