import { useContext } from 'react';
import { updateNotify, clearNotify } from '../store/actions';

const NOTIFY_TIME = 3000; // ms

export const useNotifyHook = StoreContext => {
  const [, dispatch] = useContext(StoreContext);

  const clearNotification = () => {
    setTimeout(() => {
      dispatch(clearNotify());
    }, NOTIFY_TIME);
  };

  const notifyUser = (message, isError = false) => {
    // Dispatch action to display the message
    dispatch(
      updateNotify({
        isActive: true,
        message,
        isError
      })
    );

    // Call clearNotification to set the timer using setTimeout
    clearNotification();
  };

  return { notifyUser };
};
