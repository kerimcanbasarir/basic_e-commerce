import { useAuth } from '../../contexts/AuthContext'
import React from 'react'
import { Text, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";


function Profile() {
    let navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        logout(() => {
			navigate("../");
        });
    }

    return (
        <div>
            <Text fontSize="22">Profile</Text>
            <code>
                {JSON.stringify(user)}
            </code>
            <br />
            <br />
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Profile