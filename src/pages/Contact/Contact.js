import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import './Contact.css';
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";
import TextArea from "../../components/TextArea/TextArea";
import Submit from "../../components/Submit/Submit";
import HomeIcon from "../../components/icons/HomeIcon";
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'

const Contact = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNomChange = newNom => setNom(newNom);
  const handleEmailChange = newEmail => setEmail(newEmail);
  const handlePhoneChange = newPhone => setPhone(newPhone);
  const handleMessageChange = newMessage => setMessage(newMessage);

  const toast = useToast();

  const handleClick = () => {
    if (nom == "" || email == "" || phone == "" || message == "") {
      toast({
        title: 'Formulaire invalide',
        description: 'Veuillez remplir complétement le formulaire',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    setNom("");
    setEmail("");
    setPhone("");
    setMessage("");
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous recontacterons prochainement',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <div className="Contact">
      <div><HeadingTitle title="nous contacter" /></div>
      <div className="contact-content">
        <div className="formulaire">
          <TextInput label="Nom*" value={nom} onInputChange={handleNomChange} />
          <TextInput label="Email*" value={email} onInputChange={handleEmailChange} />
          <TextInput label="Téléphone*" value={phone} onInputChange={handlePhoneChange} />
          <TextArea label="Message*" value={message} onInputChange={handleMessageChange} />
          <div className="button">
            <Submit label="Envoyer" onButtonClick={handleClick} />
          </div>
        </div>

        <div className="sep"></div>

        <div className="info-contact">
          <div className="info-contact-item"><HomeIcon /> 2 rue Alphonse Colas<br />59000 Lille</div>
          <div className="info-contact-item"><PhoneIcon /> 07 77 22 80 42</div>
          <div className="info-contact-item"><EmailIcon /> rsn@epsi.fr</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;