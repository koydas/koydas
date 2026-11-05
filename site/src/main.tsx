import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './site-kit/tokens.css';
import './site-kit/shell.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
