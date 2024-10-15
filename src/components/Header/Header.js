import { Heading } from '@chakra-ui/react'
import './Header.css';
import NavBar from '../NavBar/NavBar';

function Header() {
    return (
        <div className="Header">
            <div><Heading as='h3' size='lg' className="title">Respectful Social Network</Heading></div>
            <NavBar/>
        </div>
    );
}

export default Header;