import React, { useEffect, useState } from 'react'

import fondo1 from '../assets/img/NoticiasInternacionales.jpg';
import fondo2 from '../assets/img/CienciaYTecnologia.jpg';
import fondo3 from '../assets/img/Entretenimiento.jpg';
import fondo4 from '../assets/img/Deporte.jpg';

const Article = ({setDisplayArticle,setDisplayMainPage,setDisplayAdminPage,postId,status,setStatus,setPosts,buttonAdmin}) => {
    
    const returnMainPage = () => {
        setDisplayArticle(false);
        setDisplayMainPage(true);
        setStatus(false);
    }

    const buttonApprove = () => {
        setPosts(prevPosts => {
            const updatedPosts = prevPosts.map(item => {
            if (item.id === postId) {
                return { ...item, state: true };
            }
            return item;
        });
      
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
      
        return updatedPosts;
        });
        setDisplayArticle(false);
        setDisplayAdminPage(true);
        setStatus(false);
    };
      
    const buttonDecline = () => {
        setPosts(prevPosts => {
            const updatedPosts = prevPosts.map(item => {
                if (item.id === postId) {
                    return { ...item, state: false };
                }
                return item;
            });
      
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
      
            return updatedPosts;
        });

        setDisplayArticle(false);
        setDisplayAdminPage(true);
        setStatus(false);
    };

    const buttonDelete = () => {
        setPosts(prevPosts => {

            let updatedPosts = prevPosts.map(item => (item.id !== postId ? item : null)).filter(Boolean);

            if(!updatedPosts[0]){
                updatedPosts = [];
                localStorage.setItem('posts', JSON.stringify(updatedPosts));
                return updatedPosts;
            }
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            return updatedPosts;
        });

        
        setDisplayArticle(false);
        setDisplayMainPage(true);
    };
    
    const getPostBackground = (type) => {

        switch (type) {
            case 'Noticias Internacionales':
                return fondo1;
            case 'Ciencia y Tecnología':
                return fondo2;
            case 'Entretenimiento':
                return fondo3;
            case 'Deportes':
                return fondo4;
            default:
                return fondo1;
        }
    }

    //Articulo que se visualizara
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        //Obtener los posts
        let storagePosts = JSON.parse(localStorage.getItem('posts'));
        
        if (storagePosts){
            let postFiltered = storagePosts.filter(post => post.id === postId);
            setPost(postFiltered[0]);
        }
    },[setPost,postId])
    
    return (
    <div className='article-conteiner'>
        <header className='header-article'>{post.title}</header>
        <main className='main-article'>
            <div className='row-article'>
                <div className='columnas-article columna-1'>
                    <img className='imagen-article' src={getPostBackground(post.type)} alt="Fondo1"/>
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
                        <span className='categoria-article'>{post.type}</span>
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
                {status ? '' : buttonAdmin ? <button onClick={buttonDelete} id='button-decline'>Eliminar</button> : ''}
            </div>
        </footer>
    </div>
  )
}

export default Article;