import React from 'react';
import { createRoot } from 'react-dom/client'; // Change the import
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot instead of ReactDOM.createRoot
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
