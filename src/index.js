import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TODO from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TODO />, document.getElementById('root'));
registerServiceWorker();
