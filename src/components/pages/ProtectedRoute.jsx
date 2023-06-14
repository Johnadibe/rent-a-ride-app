import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Login from './Login';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    if (!localStorage.getItem('tourx-token')) {
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
