import React, { useEffect, useState } from 'react'
import { validateEmail } from './Validaciones';
// Images
import fondo0 from '../assets/img/Waiting.jpg';
import fondo1 from '../assets/img/NoticiasInternacionales.jpg';
import fondo2 from '../assets/img/CienciaYTecnologia.jpg';
import fondo3 from '../assets/img/Entretenimiento.jpg';
import fondo4 from '../assets/img/Deporte.jpg';

const MainPage = ({setDisplayMainPage,setdisplayLogin,sessionStarted,user,setDisplayAdminPage,setDisplayArticle,setDisplayForm,listJournalist,setListJournalist,posts,setPosts,setPostId,buttonAdmin,setButtonAdmin}) => {

    //Activar o desactivar botones
    const [buttonStory, setButtonStory] = useState(false);
    const [formName, setFormName] = useState(0);
    const [formEmail, setFormEmail] = useState(0);
    const [formSubject, setFormSubject] = useState(0);

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
        {/* Contact */}
        <div className='conteiner-contact'>
            <h3 className='contact-title'>Contacto</h3>
            <form className='contact' onSubmit={processGmail}>
                <div className='contact-flex'>
                    <div className="input-flex">
                        <input id='name' type='text' placeholder='Nombre'/>
                        {
                            formName === 1 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            )
                            : formName === 2 ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
        </div>
        {/* Contact */}
    </div>
  )
}
export default MainPage;