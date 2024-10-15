import { Textarea, Text } from "@chakra-ui/react";
import React from "react";

function TextArea(props) {
    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    return (
        <>
            <Text mb='8px'>{props.label} :</Text>
            <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder='Entrez un message à tester'
                size='sm'
            />
        </>
    )
}

export default TextArea;