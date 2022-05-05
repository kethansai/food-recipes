import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const config = { headers: { 'Access-Control-Allow-Origin': '*' }}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App config={config}/>
);
