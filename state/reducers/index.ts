import { combineReducers } from 'redux';

// Reducers
import AppReducer from './app';
import CoinReducer from './coin';

const reducers = combineReducers({
  AppReducer,
  CoinReducer
});

export default reducers;
