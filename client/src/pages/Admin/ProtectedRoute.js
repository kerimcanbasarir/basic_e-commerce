import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function ProtectedRouteAdmin() {
    const { user } = useAuth();

    {user?.role !== "admin" && <Navigate to={"/"}  />}

    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRouteAdmin