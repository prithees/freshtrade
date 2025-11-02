
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isAdmin = params.get('admin') === 'true';

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
