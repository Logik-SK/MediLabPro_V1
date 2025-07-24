import { useEffect, useState, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingScreen from '../common/LoadingScreen';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [redirecting, setRedirecting] = useState(false);

  const handleRedirect = useCallback(() => {
    if (!redirecting) {
      setRedirecting(true);
      loginWithRedirect({
        appState: {
          returnTo: window.location.pathname + window.location.search,
        },
      });
    }
  }, [redirecting, loginWithRedirect]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      handleRedirect();
    }
  }, [isAuthenticated, isLoading, handleRedirect]);

  if (isLoading || redirecting) {
    return <LoadingScreen message={redirecting ? "Redirecting to login…" : "Authenticating your session…"} />;
  }

  return children;
};

export default ProtectedRoute;
