import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "./MenuSensibilisation.css";
import { useLocation } from 'react-router-dom';

function MenuSensibilisation() {
  const location = useLocation();

  const isActive = (route) => {
    return location.pathname.endsWith(route)
  }
  return (
    <div className="NavBarSensibilisation">
      <ChakraLink as={ReactRouterLink} to="/sensibilisation/racisme" className={isActive("/racisme") && "active-route"}>
        Racisme
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/sensibilisation/sexisme" className={isActive("/sexisme") && "active-route"}>
        Sexisme
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/sensibilisation/cyberharcelement" className={isActive("/cyberharcelement") && "active-route"}>
        Cyberharcèlement
      </ChakraLink>
    </div>
  );
}

export default MenuSensibilisation;
