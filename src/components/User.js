import { useContext, useEffect } from 'react';
import { fetchProfile } from '../api.mock';
import PropTypes from 'prop-types';
import { StoreContext } from '../App';

export const User = ({ userType }) => {
  const [, dispatch] = useContext(StoreContext);
  useEffect(() => {
    const loadProfile = async () => {
      const profile = await fetchProfile(userType);
      dispatch({
        type: 'REFRESH_PROFILE',
        profile
      });
    };
    loadProfile();
  }, [userType, dispatch]);

  return null;
};

User.propTypes = {
  userType: PropTypes.string
};
