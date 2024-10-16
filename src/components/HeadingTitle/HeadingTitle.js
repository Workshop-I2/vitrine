
import { Heading } from '@chakra-ui/react';
import './HeadingTitle.css';

const HeadingTitle = (props) => {
    return (
        <Heading as='h3' size='lg'>
            {props.title}
        </Heading>
    )
};

export default HeadingTitle;