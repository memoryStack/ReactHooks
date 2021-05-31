import { updateNotify, clearNotify } from './actions';
import { CLEAR_NOTIFY, UPDATE_NOTIFY } from './actionTypes';

describe('Actions', () => {
  describe('updateNotify', () => {
    it('should return an action', () => {
      expect(updateNotify({ isActive: false, message: '', isError: false })).toEqual({
        type: UPDATE_NOTIFY,
        payload: { isActive: false, message: '', isError: false }
      })
    });
  });

  describe('clearNotify', () => {
    it('should return an action', () => {
      expect(clearNotify()).toEqual({
        type: CLEAR_NOTIFY
      })
    });
  });
});
