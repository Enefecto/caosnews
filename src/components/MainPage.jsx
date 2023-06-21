import React, { useEffect, useState } from 'react'

// Images
import fondo0 from '../assets/img/Waiting.jpg';
import fondo1 from '../assets/img/NoticiasInternacionales.jpg';
import fondo2 from '../assets/img/CienciaYTecnologia.jpg';
import fondo3 from '../assets/img/Entretenimiento.jpg';
import fondo4 from '../assets/img/Deporte.jpg';

const MainPage = ({setUser,setSesionStarted,setDisplayMainPage,setdisplayLogin,sessionStarted,setDisplayAdminPage,setDisplayArticle,setDisplayForm,listJournalist,setListJournalist,posts,setPosts,setPostId,buttonAdmin,setButtonAdmin, setDisplayContactPage,user}) => {

    //Activar o desactivar botones
    const [buttonStory, setButtonStory] = useState(false);
    
    //Post Disponibles
    const [availablePosts, setAvailablePosts] = useState([]);
    const [postsFiltered ,setPostFiltered] = useState([]);

    //Usuarios
    const [users, setUsers] = useState([]);

    //Filtros de noticias
    const [JournalistFilter, setJournalistFilter] = useState('Anonimo');
    const [typeStory, setTypeStory] = useState('Ninguna');
    const [valueSearch, setValueSearch] = useState('');

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
        let storage = JSON.parse(localStorage.getItem('User'));
        if (storage){
            setSesionStarted(true);
            setUser(storage);
        }
        fetch('http://127.0.0.1:8000/api/noticias/')
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta de la solicitud aquí
                setPosts(data);
            })
            .catch(error => {
                // Maneja los errores aquí
                console.error('Error:', error);
        });
        fetch('http://127.0.0.1:8000/api/users/')
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta de la solicitud aquí
                setUsers(data);
            })
            .catch(error => {
                // Maneja los errores aquí
                console.error('Error:', error);
        });
        // eslint-disable-next-line
    },[])

    useEffect(() => {
        
        if (sessionStarted){

            if (user.UserTypeID === 1){
                setButtonStory(false);
                setButtonAdmin(false);
            } else if (user.UserTypeID === 2){
                setButtonStory(true);
                setButtonAdmin(false);
            } else if (user.UserTypeID === 3){
                setButtonAdmin(true);
                setButtonStory(true);
            } else {
                setButtonStory(false);
                setButtonAdmin(false);
            }
        }

        if (posts){
            setAvailablePosts(posts.filter((post) => post.state));
            setPostFiltered(posts.filter((post) => post.state));
        }

        //Setear Periodistas
        if (users){
            let filteredJournalists = users.filter(user => user.UserTypeID === 2);
            setListJournalist(filteredJournalists);
        }

    },[posts,sessionStarted,setSesionStarted,setButtonAdmin,setListJournalist,setPosts,users,user])

    
    
    const getPostBackground = (type) => {

        switch (type) {
            case 0:
                return fondo0
            case 1:
                return fondo1;
                case 2:
                return fondo2;
                case 3:
                    return fondo3;
            case 4:
                return fondo4;
                default:
                return fondo0;
            }
    }
    
    const activateContact = () => {
        setDisplayMainPage(false);
        setDisplayContactPage(true);
    }
    
    const handleJournalistFilter = (e) => {
        setJournalistFilter(e.target.value);
    }
    const handleTypeStoryFilter = (e) => {
        setTypeStory(e.target.value);
    }
    
    const handleSearch = (e) => {
        setValueSearch(e.target.value);
    }

    useEffect(() => {
        let filteredPosts = postsFiltered;

        if (typeStory !== 'Ninguna') {
            filteredPosts = filteredPosts.filter((post) => post.type === parseInt(typeStory));
        }
        
        if (JournalistFilter !== 'Anonimo') {
            filteredPosts = filteredPosts.filter((post) => post.author === JournalistFilter);
        }
        setAvailablePosts(filteredPosts);

        if (valueSearch.trim() === ''){
            setAvailablePosts(filteredPosts);
        } else {
            setAvailablePosts(filteredPosts.filter(post => post.title.includes(valueSearch)));
        }

        // eslint-disable-next-line
    },[valueSearch,JournalistFilter,typeStory])

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
                        <span className='usuario-name'>{sessionStarted ? user.UserName : ''}</span>
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
                    <input id='search' placeholder='Buscar' onChange={handleSearch}/>
                </div>
                <div className='conteiner-filters'>
                    <div className='selects'>
                        <span>Periodista:</span>
                        <select className='select' onChange={handleJournalistFilter}>
                            <option>Anonimo</option>
                            {
                            listJournalist ? listJournalist.map((jour) => (
                                <option key={jour.UserId} >{jour.UserName}</option>
                            ))
                            :
                            ''
                            }
                        </select>
                        
                    </div>
                    <div className='selects'>
                        <span>Categoria:</span>
                        <select className='select' onChange={handleTypeStoryFilter}>
                            <option value='Ninguna'>Ninguna</option>
                            <option value='1'>Noticias Internacionales</option>
                            <option value='2'>Ciencia y Tecnología</option>
                            <option value='3'>Entretenimiento</option>
                            <option value='4'>Deportes</option>
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