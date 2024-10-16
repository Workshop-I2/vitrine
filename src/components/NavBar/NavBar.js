import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <ChakraLink as={ReactRouterLink} to='/'>Accueil</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/sensibilisation'>Sensibilisation</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/fake-message'>Fake Message</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/contact'>Nous contacter</ChakraLink>
        </div>
        // <Menu>
        //     <MenuButton
        //         as={IconButton}
        //         aria-label='Options'
        //         icon={<HamburgerIcon />}
        //         variant='outline'
        //     />
        //     <MenuList>
        //         <MenuItem icon={<AddIcon />} command='⌘T'>
        //             New Tab
        //         </MenuItem>
        //         <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
        //             New Window
        //         </MenuItem>
        //         <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
        //             Open Closed Tab
        //         </MenuItem>
        //         <MenuItem icon={<EditIcon />} command='⌘O'>
        //             Open File...
        //         </MenuItem>
        //     </MenuList>
        // </Menu>
    )
}

export default NavBar;