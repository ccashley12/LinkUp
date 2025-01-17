import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as atatus from 'atatus-spa';
atatus.config('5871960039b64fedb3ef0ff032dbe96b').install();


const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
