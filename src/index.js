import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/index.css';

import Router from 'academy/Router/Router';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import HeaderLayout from "academy/layouts/MainLayout/HeaderLayout";
// import App from "academy/App";
const App = (Router);

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals