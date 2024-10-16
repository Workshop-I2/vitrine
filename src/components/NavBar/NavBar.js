import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <ChakraLink as={ReactRouterLink} to='/'>Accueil</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/sensibilisation/racisme'>Sensibilisation</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/fake-message'>Fake Message</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/contact'>Nous contacter</ChakraLink>
        </div>
    )
}

export default NavBar;