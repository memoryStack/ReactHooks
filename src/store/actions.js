import { CLEAR_NOTIFY, UPDATE_NOTIFY } from './actionTypes';

export const updateNotify = payload => ({
  type: UPDATE_NOTIFY,
  payload
});

export const clearNotify = () => ({
  type: CLEAR_NOTIFY
});
