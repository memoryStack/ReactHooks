import React from 'react';
import axios from 'axios';
import { useNotifyHook } from '../../hooks/useNotifyHook';
import { StoreContext } from '../../store';

const END_POINT_URLS = {
  name: 'https://json.versant.digital/.netlify/functions/fake-api/profile/name',
  address: 'https://json.versant.digital/.netlify/functions/fake-api/profile/address'
};

export const Profile = () => {
  const { notifyUser } = useNotifyHook(StoreContext);

  const processFormSubmit = async url => {
    try {
      const response = await axios.post(url);
      const { message } = response.data;
      notifyUser(message);
    } catch (error) {
      const { message } = error.response.data;
      notifyUser(message, true);
    }
  }

  const handleNameSubmit = event => {
    event.preventDefault();
    processFormSubmit(END_POINT_URLS.name);
  };

  const handleAddressSubmit = event => {
    event.preventDefault();
    processFormSubmit(END_POINT_URLS.address);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleNameSubmit}>
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" defaultValue="React Hooks" />
        <button>Save</button>
      </form>

      <form onSubmit={handleAddressSubmit}>
        <label htmlFor="address">Your address</label>
        <input id="address" type="text" defaultValue="123 Amazing Street" />
        <button>Save</button>
      </form>
    </div>
  );
};
