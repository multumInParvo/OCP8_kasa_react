import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter as Router
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
