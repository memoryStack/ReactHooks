import { CLEAR_NOTIFY, UPDATE_NOTIFY } from './actionTypes';
import { reducer } from './reducer';

describe('Reducer', () => {
  let INITIAL_STATE;
  beforeEach(() => {
    INITIAL_STATE = {
      isActive: false,
      message: '',
      isError: false
    };
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle UPDATE_NOTIFY', () => {
    expect(reducer(INITIAL_STATE, {
      type: UPDATE_NOTIFY,
      payload: {
        isActive: true,
        message: 'test error',
        isError: true
      }
    })).toEqual({
      isActive: true,
      message: 'test error',
      isError: true
    })
  });

  it('should handle CLEAR_NOTIFY', () => {
    expect(reducer({
      isActive: true,
      message: 'test error',
      isError: true
    }, {
      type: CLEAR_NOTIFY
    })).toEqual(INITIAL_STATE);
  });
});
