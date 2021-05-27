import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../App';
import lodashGet from 'lodash.get';
import { fetchGreeting } from '../api.mock';

export const Dashboard = () => {
  const [globalState, dispatch] = useContext(StoreContext);
  const goal = lodashGet(globalState, 'profile.goal');
  const userType = lodashGet(globalState, 'userType');
  const greetingContent = lodashGet(globalState, 'greeting');

  useEffect(() => {
    const loadContent = async () => {
      if (!goal) return;

      const greeting = await fetchGreeting(userType, goal);
      dispatch({
        type: 'REFRESH_GREETING',
        greeting
      });
    };
    loadContent();
  }, [goal, userType, dispatch]);

  return <h1>{greetingContent}</h1>;
};
