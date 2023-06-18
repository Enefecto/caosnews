import React, { useState, useEffect } from 'react'
import { validatePhoneNumber } from './Validaciones';

const EditNotice = ({setDisplayMainPage,listJournalist,setDisplayEditForm,idPostEdit,posts}) => {

    const [postNumber, setPostNumber] = useState(0);
    
    const [editPost, setEditPost] = useState({});

    const backMainPage = () => {
        setDisplayEditForm(false);
        setDisplayMainPage(true);
    }

    const getPost = (e) => {
        e.preventDefault();

        const tempPost = {
            id: idPostEdit,
            title: e.target.titulo.value, 
            author: e.target.autor.value, 
            phone: parseInt(e.target.numero.value), 
            date: e.target.fecha.value, 
            day: e.target.day.checked ? true : false, 
            text: e.target.texto.value, 
            direction: e.target.direccion.value,
            type: parseInt(e.target.tipo.value), 
            urgent: editPost.urgent, 
            state: editPost.state
        } 

        if (validatePhoneNumber(tempPost.phone)){
            setPostNumber(1);

            fetch(`http://127.0.0.1:8000/api/noticias/`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(tempPost),
            })
            .then((response) => {
            if (response.ok) {
                console.log('Noticia Editada correctamente');
            } else {
                console.log('No se pudo editar, intentelo denuevo');
            }
            })
            .catch((error) => {
                console.error('Error en la solicitud PUT:', error);
            });

            setPostNumber(3);
        } else {
            setPostNumber(2);
        }
        
        setDisplayEditForm(false);
        setDisplayMainPage(true);
    }

    useEffect(() => {
        const postToEdit = posts.find((post) => post.id === idPostEdit);
        setEditPost(postToEdit);
    }, [idPostEdit, posts]);      

    return (
        <div className='background-login'>
        <div className='conteiner-general'>
        <div className="form-journalist">
            <h1>Editar Noticia</h1>
            <form onSubmit={getPost}>
                <label className='journalist-label'>Título</label>
                <input type="text" id="titulo" name="titulo" value={editPost.title} onChange={e => setEditPost({...editPost, title: e.target.value})} required/>

                <label className='journalist-label'>Autor</label>
                <select id='autor' name='autor' value={editPost.author} onChange={e => setEditPost({...editPost, author: e.target.value})}>
                    {
                    listJournalist ? listJournalist.map((jour) => (
                        <option key={jour.id}>{jour.name}</option>
                    ))
                    :
                    ''
                    }
                </select>

                <label className='journalist-label'>Numero</label>
                <div className='input-flex'>
                    <input type="number" id="numero" name="numero" value={editPost.phone} onChange={e => setEditPost({...editPost, phone: e.target.value})} required/>
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
                        <label className='journalist-label'>Fecha</label>
                        <input type="date" id="fecha" name="fecha" value={editPost.date} onChange={e => setEditPost({...editPost, date: e.target.value})} min={new Date().toISOString().split('T')[0]} required/>
                    </div>
                    <div className="conteiner-radios">
                        <div className='radio'>
                            <input type="radio" name="day-night" id="day" value={editPost.day} required/>
                            <label >Día</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" name="day-night" id="night" checked={editPost.value ? false : true} onChange={() => {}} required/>
                            <label >Noche</label>
                        </div>
                    </div>
                </div>

                <label className='journalist-label'>Texto</label>
                <textarea id="texto" name="texto" value={editPost.text} onChange={e => setEditPost({...editPost, text: e.target.value})} required></textarea>

                <label className='journalist-label'>Dirección</label>
                <input type="text" id="direccion" name="direccion" value={editPost.direction} onChange={e => setEditPost({...editPost, direction: e.target.value})} required/>

                <label className='journalist-label'>Tipo de Noticia</label>
                <select id="tipo" name="tipo" value={editPost.type} onChange={e => setEditPost({...editPost, type: e.target.value})}>
                    <option value='1'>Noticias Internacionales</option>
                    <option value='2'>Ciencia y Tecnología</option>
                    <option value='3'>Entretenimiento</option>
                    <option value='4'>Deportes</option>
                </select>
                <div className="conteiner-submit-journalist">
                    <button className='button-article' onClick={backMainPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                        </svg>
                        Volver
                    </button>
                    <input id='journalist-form' type="submit" value="Confirmar edición"/>
                </div>
            </form>
	    </div>
        </div>
        </div>
    )
}

export default EditNotice;