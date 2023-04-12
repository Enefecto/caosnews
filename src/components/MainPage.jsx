import React, { useEffect, useState } from 'react'

// Images
import fondo1 from '../assets/img/fondo1.jpg';
import fondo2 from '../assets/img/fondo2.jpg';
import fondo3 from '../assets/img/fondo3.jpg';
import fondo4 from '../assets/img/fondo4.jpg';
import fondo5 from '../assets/img/fondo5.jpg';
import fondo6 from '../assets/img/fondo6.jpg';

const MainPage = ({setDisplayMainPage,setdisplayLogin,sessionStarted,user}) => {

    //Activar o desactivar botones
    const [buttonStory, setButtonStory] = useState(false);
    const [buttonAdmin, setButtonAdmin] = useState(false);

    const activateLogin = () => {
        setDisplayMainPage(false);
        setdisplayLogin(true);
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
    },[sessionStarted, user])

    return (
    <div>
        {/* NavBar */}
        <nav className="navbar navbar-top">
            <div className="container-fluid">
                <span id="logo">Caos<span>News</span></span>
                <div className='conteiner-buttons-users'>
                    <div className='buttons-extra'>
                        {buttonAdmin ? <button className='button-extra'>Administrar</button> : ''}
                        {buttonStory ? <button className='button-extra'>Publicar</button> : ''}
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
                <div className="carousel-item active">
                    <img className='img-item' src={fondo1} alt='fondo1'/>
                    <div className='front-item'>
                        <h2 className='item-title'>Titulo De La Noticia Numero 1</h2>
                        <p className='item-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className='img-item' src={fondo2} alt='fondo2'/>
                    <div className='front-item'>
                        <h2 className='item-title'>Titulo De La Noticia Numero 2</h2>
                        <p className='item-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className='img-item' src={fondo3} alt='fondo3'/>
                    <div className='front-item'>
                        <h2 className='item-title'>Titulo De La Noticia Numero 3</h2>
                        <p className='item-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </div>
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
                            <option>Ninguno</option>
                            <option>Anderson Cooper</option>
                            <option>Christiane Amanpour</option>
                            <option>Rachel Maddow</option>
                            <option>Lester Holt</option>
                            <option>David Muir</option>
                        </select>
                    </div>
                    <div className='selects'>
                        <span>Categoria:</span>
                        <select className='select'>
                            <option>Ninguna</option>
                            <option>Noticias nacionales</option>
                            <option>Noticias internacionales</option>
                            <option>Economía</option>
                            <option>Política</option>
                            <option>Ciencia y tecnología</option>
                            <option>Entretenimiento</option>
                            <option>Deportes</option>
                        </select>
                    </div>
                </div>
            </div>
            <ul className='news'>
                <li className='card'>
                    <img className='img-card' src={fondo1} alt='fondo1'/>
                    <div className='front-card'>
                        <h2 className='card-title'>Titulo De La Noticia Numero 1</h2>
                        <p className='card-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </li>
                <li className='card'>
                    <img className='img-card' src={fondo2} alt='fondo1'/>
                    <div className='front-card'>
                        <h2 className='card-title'>Titulo De La Noticia Numero 2</h2>
                        <p className='card-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </li>
                <li className='card'>
                    <img className='img-card' src={fondo3} alt='fondo1'/>
                    <div className='front-card'>
                        <h2 className='card-title'>Titulo De La Noticia Numero 3</h2>
                        <p className='card-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </li>
                <li className='card'>
                    <img className='img-card' src={fondo4} alt='fondo1'/>
                    <div className='front-card'>
                        <h2 className='card-title'>Titulo De La Noticia Numero 4</h2>
                        <p className='card-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </li>
                <li className='card'>
                    <img className='img-card' src={fondo5} alt='fondo1'/>
                    <div className='front-card'>
                        <h2 className='card-title'>Titulo De La Noticia Numero 5</h2>
                        <p className='card-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </li>
                <li className='card'>
                    <img className='img-card' src={fondo6} alt='fondo1'/>
                    <div className='front-card'>
                        <h2 className='card-title'>Titulo De La Noticia Numero 6</h2>
                        <p className='card-p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi architecto minus corporis odit quo earum quia. 
                            Quae, tenetur saepe accusantium sed, sapiente, fuga odit 
                            eveniet sit maiores necessitatibus porro error?</p>
                    </div>
                </li>
            </ul>
        </div>
        {/* News */}
        {/* Contact */}
        <div className='conteiner-contact'>
            <h3 className='contact-title'>Contacto</h3>
            <form className='contact'>
                <div className='contact-flex'>
                    <input id='name' type='text' placeholder='Nombre'/>
                    <input id='email' type='email' placeholder='Gmail'/>
                </div>
                <input id='subject' type='text' placeholder='Asunto'/>
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