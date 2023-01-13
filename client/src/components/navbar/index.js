import React from 'react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, Text } from '@chakra-ui/react'

import { useBasket } from '../../contexts/basketContext';

import { useAuth } from '../../contexts/AuthContext';


function Navbar() {

    const { loggedIn, user } = useAuth();

    const {items} = useBasket();

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>

                    <Link to="/"><Text>..Jpm</Text></Link>
                </div>

                <ul className={styles.menu}>
                    <li>
                        <Link to="/"><Text as="sm" fontSize='md'>Products</Text></Link>
                    </li>
                </ul>

            </div>
            <div className={styles.right}>
                {
                    !loggedIn && (
                        <>
                            <Link to="/signup">
                                <Button colorScheme='pink'>Register</Button>
                            </Link>
                            <Link to="/signin">
                                <Button colorScheme='pink'>Login</Button>
                            </Link>

                        </>

            
                    )
                }

                {
                    loggedIn && (
                        <>

                        {

                            items.length > 0 && (
                                <Link to="/basket">
                                    <Button colorScheme="pink" variant="outline"> Basket ({items.length}) </Button>
                                </Link>
                            )
                        }

                        {
                            user?.role === 'admin' && (
                               <Link to="/admin">
                                <Button colorScheme='pink' variant="ghost">Admin</Button>
                               </Link>
                            )


                        }


                        <Link to="/profile">
                            <Button>Profile</Button>
                        </Link>
                        </>


                    )
                }

            </div>
        </nav>
    )
}

export default Navbar