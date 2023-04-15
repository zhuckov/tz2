import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style/reset.css';
import './style/main.css';
import "./style/header.css"
import "./style/header-content.css"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
