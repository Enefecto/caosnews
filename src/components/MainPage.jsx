import React, { useEffect, useState } from 'react'

// Images
import fondo0 from '../assets/img/Waiting.jpg';
import fondo1 from '../assets/img/NoticiasInternacionales.jpg';
import fondo2 from '../assets/img/CienciaYTecnologia.jpg';
import fondo3 from '../assets/img/Entretenimiento.jpg';
import fondo4 from '../assets/img/Deporte.jpg';

const MainPage = ({setDisplayMainPage,setdisplayLogin,sessionStarted,user,setDisplayAdminPage,setDisplayArticle,setDisplayForm,listJournalist,setListJournalist,posts,setPosts,setPostId,buttonAdmin,setButtonAdmin, setDisplayContactPage}) => {

    //Activar o desactivar botones
    const [buttonStory, setButtonStory] = useState(false);

    const [availablePosts, setAvailablePosts] = useState([]);

    const activateLogin = () => {
        setDisplayMainPage(false);
        setdisplayLogin(true);
    }

    const activateArticle = (id) => {
        setPostId(id);
        setDisplayMainPage(false);
        setDisplayArticle(true);
    }

    const activateFormJournalist = () => {
        setDisplayMainPage(false);
        setDisplayForm(true);
    }

    const activateAdminPage = () => {
        setDisplayMainPage(false);
        setDisplayAdminPage(true);
    }

    useEffect(() => {
        if (sessionStarted){
            if (user[0].type === 'User'){
                setButtonStory(false);
                setButtonAdmin(false);
            } else if (user[0].type === 'Journalist'){
                setButtonStory(true);
            } else if (user[0].type === 'Admin'){
                setButtonAdmin(true);
                setButtonStory(true);
            }
        }

        
        //Setear Periodistas
        let storage = JSON.parse(localStorage.getItem('users'));
        if (storage){
            let filteredJournalists = storage.filter(user => user.type === 'Journalist');
            setListJournalist(filteredJournalists);
        }

        //Setear Posts
        let posts = JSON.parse(localStorage.getItem('posts'));
        setPosts(posts);

        if (posts){
            setAvailablePosts(posts.filter((post) => post.state));
        }

    },[sessionStarted, user,setListJournalist,setPosts,setButtonAdmin])


    const getPostBackground = (type) => {

        switch (type) {
            case 'Ninguna':
                return fondo0
            case 'Noticias Internacionales':
                return fondo1;
            case 'Ciencia y Tecnología':
                return fondo2;
            case 'Entretenimiento':
                return fondo3;
            case 'Deportes':
                return fondo4;
            default:
                return fondo0;
        }
    }

    const activateContact = () => {
        setDisplayMainPage(false);
        setDisplayContactPage(true);
    }

    return (
    <div>
        {/* NavBar */}
        <nav className="navbar navbar-top">
            <div className="container-fluid">
                <span id="logo">Caos<span>News</span></span>
                <div className='conteiner-buttons-users'>
                    <div className='buttons-extra'>
                        {buttonAdmin ? <button className='button-extra' onClick={activateAdminPage}>Administrar</button> : ''}
                        {buttonStory ? <button className='button-extra' onClick={activateFormJournalist}>Publicar</button> : ''}
                    </div>
                    <div className='accounts'>
                        <span className='usuario-name'>{sessionStarted ? user[0].name : ''}</span>
                        <button id='login' onClick={activateLogin}>
                            <svg    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-user-circle"
                                    width="50" height="50" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="white" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">

                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="9" />
                                <circle cx="12" cy="10" r="3" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        {/* NavBar */}
        {/* Carousel */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                {
                    availablePosts.length > 0 ? availablePosts.map((post) => (
                        <div key={post.id} className="carousel-item active" onClick={() => activateArticle(post.id)}>
                            <img className='img-item' src={getPostBackground(post.type)} alt='fondo1'/>
                            <div className='front-item'>
                                <h2 className='item-title'>{post.title}</h2>
                                <p className='item-p'>{post.text}</p>
                            </div>
                        </div>
                    ))
                    :
                    <div className="carousel-item active">
                        <img className='img-item' src={fondo0} alt='fondo1'/>
                        <div className='front-item'>
                            <h2 className='item-title'>No hay noticias aún</h2>
                            <p className='item-p'>Todo esta calmado, muy calmado...</p>
                        </div>
                    </div>
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        {/* Carousel */}
        {/* News */}
        <div className='conteiner-news'>
            <div className='conteiner-flex'>
                <div className='conteiner-search'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon  icon-tabler icon-tabler-search" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                    <input id='search' placeholder='Buscar'/>
                </div>
                <div className='conteiner-filters'>
                    <div className='selects'>
                        <span>Periodista:</span>
                        <select className='select'>
                            <option>Anonimo</option>
                            {
                            listJournalist ? listJournalist.map((jour) => (
                                <option key={jour.id}>{jour.name}</option>
                            ))
                            :
                            ''
                            }
                        </select>
                        
                    </div>
                    <div className='selects'>
                        <span>Categoria:</span>
                        <select className='select'>
                            <option value='Ninguna'>Ninguna</option>
                            <option value='Noticias Internacionales'>Noticias Internacionales</option>
                            <option value='Ciencia y Tecnología'>Ciencia y Tecnología</option>
                            <option value='Entretenimiento'>Entretenimiento</option>
                            <option value='Deportes'>Deportes</option>
                        </select>
                    </div>
                </div>
            </div>
            <ul className='news'>
                {
                    availablePosts.length > 0 ? availablePosts.map((post) => (
                        <li key={post.id} className='card' onClick={() => activateArticle(post.id)}>
                            <img className='img-card' src={getPostBackground(post.type)} alt='fondo1'/>
                            <div className='front-card'>
                                <h2 className='card-title'>{post.title}</h2>
                                <p className='card-p'>{post.text}</p>
                            </div>
                        </li>
                    ))
                    :
                    <span id='No-posts'>No hay noticias</span>
                }

            </ul>
        </div>
        {/* News */}
        {/*Footer*/}
        <div className="footer">
            <span id='contactClick' onClick={activateContact}>Contacto</span>
        </div>
        {/*Footer*/}
    </div>
  )
}
export default MainPage;