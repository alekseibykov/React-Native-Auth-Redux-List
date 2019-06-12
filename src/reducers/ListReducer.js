import { combineReducers } from 'redux';
import * as LibraryList from './LibraryList.json';

const INITIAL_STATE = LibraryList;

const ListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  content: ListReducer,
});
