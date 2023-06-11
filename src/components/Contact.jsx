import React, {useState} from 'react'
import { validateEmail } from './Validaciones';

const Contact = ({setDisplayMainPage,setDisplayContactPage}) => {

    const [formName, setFormName] = useState(0);
    const [formEmail, setFormEmail] = useState(0);
    const [formSubject, setFormSubject] = useState(0);

    const returnMainPage = () => {
        setDisplayContactPage(false);
        setDisplayMainPage(true);
    }

    const processGmail = (e) => {
        e.preventDefault();

        const tempMessage = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }

        let success = 0;

        //Validar
        if (tempMessage.name.length > 0){success += 1;setFormName(1);
        } else {setFormName(2);}
        
        if (validateEmail(tempMessage.email)){success += 1;setFormEmail(1);
        } else {setFormEmail(2)}

        if (tempMessage.subject.length > 0){success += 1;setFormSubject(1);
        } else {setFormSubject(2);}
        
        if (tempMessage.message.length > 0){success += 1;
        } else {}

        if(success === 4){
            setFormName(3);
            setFormEmail(3)
            setFormSubject(3);

            //Borrar mensaje
            e.target.name.value = '';
            e.target.email.value = '';
            e.target.subject.value = '';
            e.target.message.value = '';
            
            alert('Gmail enviado correctamente :)')
        }


    }

    return (
        <div className='conteiner-contact'>
        <h3 className='contact-title'>Contacto</h3>
        <form className='contact' onSubmit={processGmail}>
            <div className='contact-flex'>
                <div className="input-flex">
                    <input id='name' type='text' placeholder='Nombre'/>
                    {
                        formName === 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        )
                        : formName === 2 ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        : ''
                    }
                </div>
                <div className="input-flex">
                    <input id='email' type='email' placeholder='Gmail'/>
                    {
                        formEmail === 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        )
                        : formEmail === 2 ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        : ''
                    }
                </div>
            </div>
            <div className="input-flex">
                <input id='subject' type='text' placeholder='Asunto'/>
                {
                        formSubject === 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        )
                        : formSubject === 2 ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        : ''
                    }
            </div>
            <textarea id='message' placeholder="Mensaje"></textarea>
            <div className='contact-bottom'>
                <button id='submit' type='submit'>Enviar Mensaje</button>
            </div>
        </form>
        <button className='back' onClick={returnMainPage}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                </svg>
                Volver
        </button>
    </div>
    )
}

export default Contact;