import { Heading } from '@chakra-ui/react';
import './FakeMessage.css';
import TextArea from '../../components/TextArea/TextArea';
import Submit from '../../components/Submit/Submit';

function FakeMessage() {
    return (
        <div className="FakeMessage">
            <Heading as='h3' size='lg'>
                Fake Message
            </Heading>
            <div className="TextArea">
            <TextArea label="Message"/>
            </div>

            <div className="submitClass">
                <Submit label="Envoyer"/>
            </div>

        </div>
    );
}

export default FakeMessage;