import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/index1.css';
import { Provider } from 'react-redux';
import App from './routes/App';
import { store } from './redux/store/store';

import '../src/style/index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
    </Provider>,
);


