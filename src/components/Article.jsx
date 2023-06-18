import React, { useEffect, useState } from 'react'

import fondo1 from '../assets/img/NoticiasInternacionales.jpg';
import fondo2 from '../assets/img/CienciaYTecnologia.jpg';
import fondo3 from '../assets/img/Entretenimiento.jpg';
import fondo4 from '../assets/img/Deporte.jpg';

const Article = ({setDisplayArticle,setDisplayMainPage,setDisplayAdminPage,postId,status,setStatus,posts,buttonAdmin,setDisplayEditForm,setIdPostEdit}) => {
    
    const returnMainPage = () => {
        setDisplayArticle(false);
        setDisplayMainPage(true);
        setStatus(false);
    }

    const buttonApprove = () => {
        const updatedPost = { ...post };
        updatedPost.state = true;
        fetch(`http://127.0.0.1:8000/api/noticias/`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPost),
        })
        .then((response) => {
        if (response.ok) {
            console.log('La solicitud PUT fue exitosa.');
        } else {
            console.log('La solicitud PUT falló.');
        }
        })
        .catch((error) => {
            console.error('Error en la solicitud PUT:', error);
        });
        setDisplayArticle(false);
        setDisplayAdminPage(true);
        setStatus(false);
    };
      
    const buttonDecline = () => {
        fetch(`http://127.0.0.1:8000/api/noticias/${postId}/`, {
            method: 'DELETE'
        })
        .then((response) => {
        if (response.ok) {
            console.log('La solicitud DELETE fue exitosa.');
        } else {
            console.log('La solicitud DELETE falló.');
        }
        })
        .catch((error) => {
            console.error('Error en la solicitud DELETE:', error);
        });
        setDisplayArticle(false);
        setDisplayAdminPage(true);
        setStatus(false);
    };

    const buttonEdit = () => {
        setIdPostEdit(post.id);
        setDisplayArticle(false);
        setDisplayEditForm(true);
    }

    const buttonDelete = () => {
        fetch(`http://127.0.0.1:8000/api/noticias/${postId}/`, {
            method: 'DELETE'
        })
        .then((response) => {
        if (response.ok) {
            console.log('La solicitud DELETE fue exitosa.');
        } else {
            console.log('La solicitud DELETE falló.');
        }
        })
        .catch((error) => {
            console.error('Error en la solicitud DELETE:', error);
        });

        
        setDisplayArticle(false);
        setDisplayMainPage(true);
    };
    
    const getPostBackground = (type) => {

        switch (type) {
            case 1:
                return fondo1;
            case 2:
                return fondo2;
            case 3:
                return fondo3;
            case 4:
                return fondo4;
            default:
                return fondo1;
        }
    }

    const getType = (type) => {

        switch (type) {
            case 1:
                return 'Noticias Internacionales';
            case 2:
                return 'Ciencia y Tecnología';
            case 3:
                return 'Entretenimiento';
            case 4:
                return 'Deportes';
            default:
                return 'Noticias Internacionales';
        }
    }

    //Articulo que se visualizara
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        
        if (posts){
            let postFiltered = posts.filter(item => item.id === postId);
            setPost(postFiltered[0]);
        }
    },[posts,setPost,postId])
    
    return (
    <div className='article-conteiner'>
        <header className='header-article'>{post.title}</header>
        <main className='main-article'>
            <div className='row-article'>
                <div className='columnas-article columna-1'>
                    <img className='imagen-article' src={getPostBackground(post.type)} alt="Fondo"/>
                </div>
                <div className='columnas-article columna-2'>
                    <div className='top-columna-article'>
                        <h2 className='title-article'>{post.author}</h2>
                        <span className='fecha-article'>{post.date}</span>
                    </div>
                    <div className='mid-columna-article'>
                        <p className='parrafo-article'>{post.text}</p>
                    </div>
                    <div className='bottom-columna-article'>
                        <span className='ubicacion-article'>{post.direction}</span>
                        <span className='categoria-article'>{getType(post.type)}</span>
                    </div>
                </div>
            </div>
        </main>
        <footer className='footer-article'>
            <button className='button-article' onClick={returnMainPage}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                </svg>
                Volver
            </button>
            <div className="buttonsDecision">
                {status ? <button onClick={buttonApprove} id='button-aprove'>Aprobar</button> : ''}
                {status ? <button onClick={buttonDecline} id='button-decline'>Rechazar</button> : ''}
                {status ? '' : buttonAdmin ? <button onClick={buttonEdit} id='button-aprove'>Editar</button> : ''}
                {status ? '' : buttonAdmin ? <button onClick={buttonDelete} id='button-decline'>Eliminar</button> : ''}
            </div>
        </footer>
    </div>
  )
}

export default Article;