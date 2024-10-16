import './FakeMessage.css';
import TextArea from '../../components/TextArea/TextArea';
import Submit from '../../components/Submit/Submit';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import HeadingTitle from '../../components/HeadingTitle/HeadingTitle';

function FakeMessage() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [disableMessageInout, setDisableMessageInout] = useState(false);

    const toast = useToast();

    const toxicityReasonLabels = {
        toxic: 'toxic',
        obscene: 'obscene',
        insult: 'insult',
        identity_hate: 'identity_hate',
    }

    function toastError(errorMessage) {
        toast({
            title: 'Erreur message',
            description: errorMessage,
            status: 'error',
            duration: 9000,
            isClosable: true,
        });
    }

    const dateToStringFormat = (date) => {
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth()).padStart(2, '0');
        let year = String(date.getFullYear()).padStart(2, '0');
        let hour = String(date.getHours()).padStart(2, '0');
        let minute = String(date.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} à ${hour}:${minute}`;
    };

    const handleInputChange = (newMessage) => {
        setMessage(newMessage);
    };

    const handleClick = async () => {
        setMessage("");
        const url = process.env.REACT_APP_API_URL + "predict";
        setDisableMessageInout(true);
        let toxicReasons = [];

        try {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ comment: message }),
                headers: headers,
            });

            const json = await response.json();
            toxicReasons = json.toxic_reasons

        } catch (error) {
            console.error(error.message);
            toastError(error.message);
            setDisableMessageInout(false);
            return;
        }

        setDisableMessageInout(false);
        if (toxicReasons.length > 0) {
            const toxicReasonsString = toxicReasons.map(toxicReason => toxicityReasonLabels[toxicReason]).join(", ");
            const errorMessage = "Nous avons supprimé ce message car il traite les sujets suivants : " + toxicReasonsString
            toastError(errorMessage);
            return;
        }

        const newMessage = {
            datetime: new Date(),
            body: message,
        }
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="FakeMessage">
            <HeadingTitle title="fake message" />

            {messages.length > 0 && (
                <div className="message">
                    {messages.map((message, index) => (
                        <div key={index} className='item-message'>
                            <div className="item-message-datetime">{dateToStringFormat(message.datetime)}</div>
                            <div className="item-message-body">{message.body}</div>
                        </div>
                    ))}
                </div>
            )}

            <div className="TextArea">
                <TextArea label="Message" value={message} onInputChange={handleInputChange} disabled={disableMessageInout} />
            </div>
            <div className="submitClass">
                <Submit label="Envoyer" onButtonClick={handleClick} disabled={disableMessageInout} />
            </div>

        </div>
    );
}

export default FakeMessage;