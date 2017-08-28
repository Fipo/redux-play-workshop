import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
let time1, time2;
setTimeout(() => {
  time1 = Math.floor(Date.now());
  store.dispatch(addTodo('Learn about actions'));
}, 1000);
setTimeout(() => {
  time2 = Math.floor(Date.now());
  store.dispatch(addTodo('Learn about reducers'));
}, 1100);
setTimeout(() => store.dispatch(addTodo('Learn about store')), 1200);
setTimeout(() => store.dispatch(toggleTodo(time1)), 1300);
setTimeout(() => store.dispatch(toggleTodo(time2)), 1400);
setTimeout(() => store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)), 1500);

// Stop listening to state updates
unsubscribe();

const el = document.getElementById('root');

const App = () =>
  <Provider store={store}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>;

render(<App />, el);
