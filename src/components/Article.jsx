import React from 'react'
import fondo3 from '../assets/img/fondo3.jpg';

const Article = ({setDisplayArticle,setDisplayMainPage}) => {
    
    const returnMainPage = () => {
        setDisplayArticle(false);
        setDisplayMainPage(true);
    }
    // La historia entera*
    // Titulo*
    // Autor*
    // La Fecha*
    // Ubicacion
    // Categoria a la que pertenece
    return (
    <div className='article-conteiner'>
        <header className='header-article'>Titulo De La Noticia Numero 1</header>
        <main className='main-article'>
            <div className='row-article'>
                <div className='columnas-article columna-1'>
                    <img className='imagen-article' src={fondo3} alt="Fondo1"/>
                </div>
                <div className='columnas-article columna-2'>
                    <div className='top-columna-article'>
                        <h2 className='title-article'>Autor De La Noticia</h2>
                        <span className='fecha-article'>12/05/2010</span>
                    </div>
                    <div className='mid-columna-article'>
                        <p className='parrafo-article'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                    <div className='bottom-columna-article'>
                        <span className='ubicacion-article'>Varas 666</span>
                        <span className='categoria-article'>Noticias Nacionales</span>
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