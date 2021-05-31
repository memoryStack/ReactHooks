import React, { useContext } from 'react';
import { StoreContext } from '../../store';

export const Notify = () => {
  const [globalState] = useContext(StoreContext);
  const { isActive, message, isError } = globalState;

  if (!isActive) return null;

  const title = isError ? 'Error' : 'Success';
  const icon = isError ? '/error.svg' : '/success.svg';

  return (
    <div className="modal">
      <div className="modal-content">
        <img className="notify-image" src={icon} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
