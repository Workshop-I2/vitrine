import { Textarea, Text } from "@chakra-ui/react";
import React from "react";
import './TextArea.css';

function TextArea(props) {
    let handleInputChange = (e) => {
        let inputValue = e.target.value
        props.onInputChange(inputValue)
    }

    return (
        <>
            <Text mb='8px'>{props.label} :</Text>
            <Textarea
                disabled={props.disabled}
                value={props.value}
                onChange={handleInputChange}
                placeholder='Entrez un message à tester'
                size='sm'
            />
        </>
    )
}

export default TextArea;