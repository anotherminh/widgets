import { combineReducers } from 'redux';

// each key points to a reducer, which returns a state
const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
