import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Counter from './components/Counter';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const el = document.getElementById('root');

const App = () =>
  <Provider store={store}>
    <Counter />
  </Provider>;

render(<App />, el);
