import './App.css';
import fondo1 from './assets/img/fondo1.jpg';
import fondo2 from './assets/img/fondo2.jpg';
import fondo3 from './assets/img/fondo3.jpg';

function App() {
    return (
    <div className="App">
        {/* NavBar */}
        <nav className="navbar">
            <div className="container-fluid">
                <span id="logo">Caos<span>News</span></span>
                <button id='login'>
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
    </div>
  );
}

export default App;