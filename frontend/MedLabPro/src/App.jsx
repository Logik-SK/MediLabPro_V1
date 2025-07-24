import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, protectedRoutes, Layout } from './routes/routesConfig';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, page: Component }, idx) => (
        <Route key={idx} path={path} element={<Component />} />
      ))}

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {protectedRoutes.map(({ path, page: Component }, idx) => (
          <Route key={idx} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
