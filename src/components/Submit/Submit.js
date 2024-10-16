import { Button } from '@chakra-ui/react';
import './Submit.css';
import { Spinner } from '@chakra-ui/react'

function Submit(props) {
    return (
        <Button className='Submit' disabled={props.disabled} onClick={props.onButtonClick}>{props.label} {props.disabled && <Spinner />}</Button>
    )
}

export default Submit;