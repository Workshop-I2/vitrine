import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import './NavBar.css';
import { useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    const isActive = (route) => {
        if (route === "/") {
            return location.pathname === "/";
        } else {
            return location.pathname.startsWith(route);
        }
    }

    return (
        <div className="NavBar">
            <ChakraLink as={ReactRouterLink} className={isActive("/") && "active-route"} to='/'>Accueil</ChakraLink>
            <ChakraLink as={ReactRouterLink} className={isActive("/sensibilisation") && "active-route"} to='/sensibilisation/racisme'>Sensibilisation</ChakraLink>
            <ChakraLink as={ReactRouterLink} className={isActive("/fake-message") && "active-route"} to='/fake-message'>Fake Message</ChakraLink>
            <ChakraLink as={ReactRouterLink} className={isActive("/contact") && "active-route"} to='/contact'>Nous contacter</ChakraLink>
        </div>
    )
}

export default NavBar;