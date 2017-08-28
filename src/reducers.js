import { combineReducers } from 'redux';
import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions';

const { SHOW_ALL } = VisibilityFilters;

/*
const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: []
};
*/

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: Math.floor(Date.now())
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        console.log(action);

        if (action.index === todo.id) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

/*
 * export default function todoApp(state = initialState, action) {
 *   return {
 *     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
 *     todos: todos(state.todos, action)
 *   }
 * }
 *
 * same as
 */

const todoApp = combineReducers({ visibilityFilter, todos });

export default todoApp;
