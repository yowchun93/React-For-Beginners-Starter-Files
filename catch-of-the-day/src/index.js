// import Component from React
import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import Router from "./components/Router";
import './css/style.css';

// let's go!
render(<Router />, document.querySelector('#main'));
