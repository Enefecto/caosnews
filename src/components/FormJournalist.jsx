import React, { useState } from 'react'
import { validatePhoneNumber } from './Validaciones';
import { SaveStorage } from './SaveStorage';

const FormJournalist = ({setDisplayMainPage,setDisplayForm,listJournalist,setPosts}) => {

    const [postNumber, setPostNumber] = useState(0);

    const backMainPage = () => {
        setDisplayForm(false);
        setDisplayMainPage(true);
    }

    const getPost = (e) => {
        e.preventDefault();
        const tempPost = {
            id: new Date().getTime(),
            title: e.target.titulo.value,
            author: e.target.autor.value,
            phone: e.target.numero.value,
            date: e.target.fecha.value,
            day: e.target.day.checked,
            night: e.target.night.checked,
            text: e.target.texto.value,
            direction: e.target.direccion.value,
            type: e.target.tipo.value,
            urgent: e.target.urgent.checked,
            state: false
        } 

        
        if (validatePhoneNumber(tempPost.phone)){
            setPostNumber(1);
            alert('Solicitud enviada correctamente');

            SaveStorage('posts',tempPost);

            setPosts(posts => {
                if (posts){
                    return [tempPost, ...posts]
                } else {
                    return [tempPost];
                }
            });

            setPostNumber(3);

            e.target.titulo.value = '';
            e.target.numero.value = '';
            e.target.texto.value = '';
            e.target.day.checked = false;
            e.target.night.checked = false;
            e.target.fecha.value = '';
            e.target.direccion.value = '';
            e.target.urgent.checked = false;
        } else {
            setPostNumber(2);
        }
    }
    return (
        <div className='background-login'>
        <div className='conteiner-general'>
        <div className="form-journalist">
            <h1>Nueva Noticia</h1>
            <form onSubmit={getPost}>
                <label className='journalist-label' htmlFor="titulo">Título</label>
                <input type="text" id="titulo" name="titulo" required/>

                <label className='journalist-label' htmlFor="autor">Autor</label>
                <select id='autor' name='autor'>
                    {
                    listJournalist ? listJournalist.map((jour) => (
                        <option key={jour.id}>{jour.name}</option>
                    ))
                    :
                    ''
                    }
                </select>

                <label className='journalist-label' htmlFor="numero">Numero</label>
                <div className='input-flex'>
                    <input type="number" id="numero" name="numero" required/>
                    {
                            postNumber === 1 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            )
                            : postNumber === 2 ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            : ''
                        }
                </div>
                <div className="conteiner-inputs-form">
                    <div>
                        <label className='journalist-label' htmlFor="fecha">Fecha</label>
                        <input type="date" id="fecha" name="fecha" min={new Date().toISOString().split('T')[0]} required/>
                    </div>
                    <div className="conteiner-radios">
                        <div className='radio'>
                            <input type="radio" name="day-night" id="day" required/>
                            <label >Día</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" name="day-night" id="night" required />
                            <label >Noche</label>
                        </div>
                    </div>
                </div>

                <label className='journalist-label' htmlFor="texto">Texto</label>
                <textarea id="texto" name="texto" required></textarea>

                <label className='journalist-label' htmlFor="direccion">Dirección</label>
                <input type="text" id="direccion" name="direccion" required/>

                <label className='journalist-label' htmlFor="tipo">Tipo de Noticia</label>
                <select id="tipo" name="tipo">
                    <option value='Noticias Internacionales'>Noticias Internacionales</option>
                    <option value='Ciencia y Tecnología'>Ciencia y Tecnología</option>
                    <option value='Entretenimiento'>Entretenimiento</option>
                    <option value='Deportes'>Deportes</option>
                </select>
                <div className="conteiner-submit-journalist">
                    <div>
                        <input type="checkbox" name="when" id="urgent" />
                        <label htmlFor="when">Urgente</label>
                    </div>
                    <button className='button-article' onClick={backMainPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                        </svg>
                        Volver
                    </button>
                    <input id='journalist-form' type="submit" value="Enviar Solicitud"/>
                </div>
            </form>
	    </div>
        </div>
        </div>
    )
}

export default FormJournalist;