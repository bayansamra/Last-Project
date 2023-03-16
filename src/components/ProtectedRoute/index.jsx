import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../context/ContextAuthor";

const ProtectedRoute = () => {
  const { authorized } = useAuthContext();
  return (
    <div>
      {authorized ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default ProtectedRoute;