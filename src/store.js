import { createStore, applyMiddleware, compose } from 'redux';
// @redux-thunk is used to handle asynchronous actiosn in redux
import thunk from 'redux-thunk'; 
import rootreducer from './reducers';

const initialState = {};

const middleware = [thunk];

 //@appluMiddleWare is used for using thunk 
const store = createStore(
  rootreducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX
  )
);

export default store;
