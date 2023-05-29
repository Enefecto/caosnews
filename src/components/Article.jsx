import React, { useEffect, useState } from 'react'
import fondo3 from '../assets/img/fondo3.jpg';

const Article = ({setDisplayArticle,setDisplayMainPage,postId}) => {
    
    const returnMainPage = () => {
        setDisplayArticle(false);
        setDisplayMainPage(true);
    }

    //Articulo que se visualizara
    const [post, setPost] = useState([]);

    useEffect(() => {
        //Obtener los posts
        let posts = JSON.parse(localStorage.getItem('posts'));
        console.log(posts);
        console.log(postId);

        if (posts){
            let postFiltered = posts.filter(post => post.id === postId);
            setPost(postFiltered[0]);
        }
    },[setPost,postId])

    return (
    <div className='article-conteiner'>
        <header className='header-article'>{post.title}</header>
        <main className='main-article'>
            <div className='row-article'>
                <div className='columnas-article columna-1'>
                    <img className='imagen-article' src={fondo3} alt="Fondo1"/>
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
        </footer>
    </div>
  )
}

export default Article;