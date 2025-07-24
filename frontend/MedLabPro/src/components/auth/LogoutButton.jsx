import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = ({ onLogout }) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

    if (onLogout) onLogout(); // Optional: notify parent
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
