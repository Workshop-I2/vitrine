import { Textarea, Text } from "@chakra-ui/react";
import React from "react";
import './TextArea.css';

function TextArea(props) {
    let handleInputChange = (e) => {
        let inputValue = e.target.value
        props.onInputChange(inputValue)
    }

    return (
        <div>
            <Text mb='8px'>{props.label} :</Text>
            <Textarea
                disabled={props.disabled}
                value={props.value}
                onChange={handleInputChange}
                size='sm'
            />
        </div>
    )
}

export default TextArea;