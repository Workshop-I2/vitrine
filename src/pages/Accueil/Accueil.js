import HeadingTitle from '../../components/HeadingTitle/HeadingTitle'
import './Accueil.css';
import { Image } from '@chakra-ui/react'

function Accueil() {
    return (
        <div className="Accueil">
            <div className='accueil-content'>
                <div className='accueil-content-item-1'><Image
                    boxSize='300px'
                    src='/logo.jpg'
                    alt='Dan Abramov'
                /></div>
                <div className='accueil-content-item-2'>
                    <HeadingTitle title="bienvenue sur RSN" />
                    <div className='accueil-content-item-2-text'>
                        Notre solution est une plateforme de contrôle et de sensibilisation contre tout abus, agnostic des réseaux sociaux<br /><br />
                        Nous laissons le choix aux plateformes de déterminer les sanctions mais leur proposons plusieurs services : blocage des posts et des messages, obligation de suivre une sensibilisation avant le déblocage ou blocage temporaire.
                    </div>
                </div>
            </div>
            <div className='accueil-content-2'>
                Notre IA analyse les messages et posts sur n’importe quel réseau social avant qu’ils soient publiés et détermine le niveau de toxicité, racisme, menace, obscénité, insulte et de haine.
                <br /><br />
                Si un niveau dépasse le seuil de tolérabilité, nous bloquons le message et envoyons un rapport à la plateforme</div>
        </div>

    )
}

export default Accueil;