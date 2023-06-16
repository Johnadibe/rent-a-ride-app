import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import { TOKENKEY } from 'util/auth';
import Login from './Login';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    if (!localStorage.getItem(TOKENKEY) || localStorage.getItem(TOKENKEY) === undefined) {
      setIsLoggedIn(false);
      navigate('/login');
    }

    setIsLoggedIn(true);
  };

  useEffect(() => checkUserToken(), []);

  return (
    <>
      {
        isLoggedIn ? children : <Login />
      }
    </>
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
