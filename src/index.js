import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FinalProduct from './components/final-product';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FinalProduct />, document.getElementById('root'));
registerServiceWorker();
