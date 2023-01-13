import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigate, Link, Routes, Route } from "react-router-dom";

import { useAuth } from "./../../contexts/AuthContext";
import "./style.css";

import Home from "./Home";
import Products from "./Products";
import Orders from "./Orders";
import NewProduct from "./Products/new";

function Admin() {
	const { user } = useAuth();
	return (
		<>
			{user?.role !== "admin" && <Navigate to={"/"} replace={true} />}


        <nav >
            <ul className="admin-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="Products">Products</Link>
                </li>
                <li>
                    <Link to="Orders">Orders</Link>
                </li>
            </ul>

        </nav>

        <Box>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="Products" element={<Products/>} />
                <Route path="Orders" element={<Orders/>} />
                <Route path="products/new" element={<NewProduct/>} />
            </Routes>


        </Box>


		</>
	);
}

export default Admin;