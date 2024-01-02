import React from 'react';
import logo from './Logo .svg';
import { Box, HStack } from '@chakra-ui/react';

function  Nav() {
    return  (
        <Box color="black" maxWidth="1280px" margin="0 auto">
            <HStack
                px={16}
                py={4}
                justifyContent="space-between"
                alignItems="center"
            >
  
            <nav>
           <HStack spacing={8}>
                <a href="/home"> <img src={logo} alt="Logo" /> </a>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/reservations">Reservations</a>
                <a href="/order_online">Order Online</a>
                <a href="login">Login</a>
            </HStack>
            </nav>
            </HStack>
        </Box>
    );
    };

    
export default Nav;