import { createStore, applyMiddleware } from 'redux';
// @redux-thunk is used to handle asynchronous actiosn in redux
import thunk from 'redux-thunk'; 
import rootreducer from './reducers';

const initialState = {};

const middleware = [thunk];

 //@appluMiddleWare is used for using thunk 
const store = createStore(
  rootreducer, 
  initialState, 
  applyMiddleware(...middleware)
);

export default store;
