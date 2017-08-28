import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchPostsIfNeeded } from './actions';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

store.dispatch(fetchPostsIfNeeded('reactjs')).then(() => console.log(store.getState()));

const el = document.getElementById('root');

const App = () =>
  <Provider store={store}>
    <div>
      <h1>Hi</h1>
    </div>
  </Provider>;

render(<App />, el);
