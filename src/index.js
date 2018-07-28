import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

import 'typeface-montserrat';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
