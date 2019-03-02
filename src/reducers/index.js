import { combineReducers } from 'redux';
import { numberItem } from './numberItem';
import { apiItem } from './apiItem';

const rootReducer = combineReducers({
  numberItem,
  apiItem,
});

export default rootReducer;
