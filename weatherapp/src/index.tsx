import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Maps from './Maps';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Maps />
    {/* <App2 /> */}
  </React.StrictMode>
);
