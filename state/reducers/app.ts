import * as types from '../types/app';
import { Action } from '../';
import { HYDRATE } from 'next-redux-wrapper';

export interface AppState {
  loggedIn: boolean;
}

export const initialState: AppState = {
  loggedIn: false
};

const AppReducer = (
  state: AppState = initialState,
  { type, payload }: Action
): AppState => {
  switch (type) {
    // set user is logged in
    case types.LOGGED_IN:
      return {
        ...state,
        loggedIn: true
      };

    // set user is logged out
    case types.LOGGED_OUT:
      return {
        ...state,
        loggedIn: false
      };

    /**
     * @see https://github.com/kirill-konshin/next-redux-wrapper#usage
     */
    case HYDRATE:
      return {
        ...state,
        ...payload
      };

    // default
    default:
      return state;
  }
};

export default AppReducer;
