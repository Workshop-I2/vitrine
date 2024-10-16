import { Input, Text } from '@chakra-ui/react';
import './TextInput.css'

const TextInput = (props) => {
    const handleInputChange = e => {
        let inputValue = e.target.value
        props.onInputChange(inputValue)
    }
    return (
        <div>
            <Text mb='8px'>{props.label} :</Text>
            <Input type='text' 
            value={props.value}
            onChange={handleInputChange}/>
        </div>
    );
};

export default TextInput;