import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "./MenuSensibilisation.css";

function MenuSensibilisation() {
  return (
    <div className="NavBar">
      <ChakraLink as={ReactRouterLink} to="/sensibilisation/racisme">
        Racisme
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/sensibilisation/sexisme">
        Sexisme
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/sensibilisation/cyberharcelement">
        Cyberharcèlement
      </ChakraLink>
    </div>
  );
}

export default MenuSensibilisation;
