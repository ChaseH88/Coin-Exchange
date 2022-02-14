import { createStore, Store, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

// Reducers
import reducers from './reducers';

// Types
import { AppState } from './reducers/app';
import { CoinState } from './reducers/coin';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export interface RootState {
  AppReducer: AppState
  CoinReducer: CoinState
}

export interface Action {
  type: string;
  payload?: any;
}

/**
 * For Redux DevTools
 * @see https://github.com/zalmoxisus/redux-devtools-extension#usage
 */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25
    })
    : compose;

/**
 * Redux middleware
 */
const enhancer = composeEnhancers(applyMiddleware(thunk));

/**
 * Function to create the Redux store
 */
const makeStore = () => createStore(reducers, enhancer);

/**
 * Redux Wrapper for Next.js
 * @see https://github.com/kirill-konshin/next-redux-wrapper
 */
export const wrapper = createWrapper<Store<RootState | unknown>>(makeStore);
