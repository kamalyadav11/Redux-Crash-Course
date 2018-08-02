import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';

const allreducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(
  allreducers,
  { //Setting Initial State
    products: [{ name: 'iPhone' }],
    user: 'Michael'
  },
  window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();