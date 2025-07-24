import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
    });
  };

  return (
    <button onClick={handleLogin} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Log In'}
    </button>
  );
};

export default LoginButton;
