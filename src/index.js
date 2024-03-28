import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Component/HomePage'
import { BrowserRouter } from 'react-router-dom';
import App from './App';



ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    document.getElementById("root")
);