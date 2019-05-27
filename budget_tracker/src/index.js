import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';



import createApplicationStore from './create-store';
import App from './App/App.js';


const store = createApplicationStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
