import { CLEAR_NOTIFY, UPDATE_NOTIFY } from './actionTypes';

export const INITIAL_STATE = {
  isActive: false,
  message: '',
  isError: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NOTIFY:
      return {
        ...state,
        ...action.payload
      };
    case CLEAR_NOTIFY:
      return {
        ...state,
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};
