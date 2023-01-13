import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ element }) {
	const { loggedIn } = useAuth();
	return loggedIn ? <Outlet /> : <Navigate to="/Signin" />;
}

export default ProtectedRoute;