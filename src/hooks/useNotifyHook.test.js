import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { useNotifyHook } from './useNotifyHook';
import * as actions from '../store/actions';

describe('useNotifyHook', () => {
  let globalState, dispatch, StoreContext;
  beforeEach(() => {
    globalState = {};
    dispatch = jest.fn();
    StoreContext = React.createContext([globalState, dispatch]);
    jest.useFakeTimers();
  });

  it('should show and hide notification when notifyUser is called', () => {
    const { result } = renderHook(() => useNotifyHook(StoreContext));

    const updateNotifySpy = jest.spyOn(actions, 'updateNotify');
    const clearNotifySpy = jest.spyOn(actions, 'clearNotify');

    act(() => {
      result.current.notifyUser('some message');
    });

    expect(dispatch).toHaveBeenCalledTimes(1);

    expect(updateNotifySpy).toHaveBeenCalledWith({
      isActive: true,
      message: 'some message',
      isError: false
    });

    jest.runAllTimers();

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(clearNotifySpy).toHaveBeenCalledTimes(1);
  });
});
