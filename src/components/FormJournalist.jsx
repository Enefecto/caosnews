import React from 'react'

const FormJournalist = ({setDisplayMainPage,setDisplayForm}) => {

    const backMainPage = () => {
        setDisplayForm(false);
        setDisplayMainPage(true);
    }

    return (
        <div className='background-login'>
        <div className='conteiner-general'>
        <div className="form-journalist">
            <h1>Nueva Noticia</h1>
            <form>
                <label className='journalist-label' htmlFor="titulo">Título</label>
                <input type="text" id="titulo" name="titulo" required/>

                <label className='journalist-label' htmlFor="autor">Autor</label>
                <select id="autor" name="autor">
                    <option value="">Ninguno</option>
                    <option value="Anderson Cooper">Anderson Cooper</option>
                    <option value="Christiane Amanpour">Christiane Amanpour</option>
                    <option value="Rachel Maddow">Rachel Maddow</option>
                    <option value="Lester Holt">Lester Holt</option>
                    <option value="David Muir">David Muir</option>
                </select>

                <label className='journalist-label' htmlFor="numero">Numero</label>
                <input type="number" id="numero" name="numero" required/>

                <div className="conteiner-inputs-form">
                    <div>
                        <label className='journalist-label' htmlFor="fecha">Fecha</label>
                        <input type="date" id="fecha" name="fecha" required/>
                    </div>
                    <div className="conteiner-radios">
                        <div className='radio'>
                            <input type="radio" name="day-night" id="day" />
                            <label htmlFor="day-night">Día</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" name="day-night" id="night" />
                            <label htmlFor="day-night">Noche</label>
                        </div>
                    </div>
                </div>

                <label className='journalist-label' htmlFor="texto">Texto</label>
                <textarea id="texto" name="texto" required></textarea>

                <label className='journalist-label' htmlFor="direccion">Dirección</label>
                <input type="text" id="direccion" name="direccion" required/>

                <label className='journalist-label' htmlFor="tipo">Tipo de Noticia</label>
                <select id="tipo" name="tipo">
                    <option value="">Ninguno</option>
                    <option value="Noticias nacionales">Noticias nacionales</option>
                    <option value="Noticias internacionales">Noticias internacionales</option>
                    <option value="Economía">Economía</option>
                    <option value="Política">Política</option>
                    <option value="Ciencia y tecnología">Ciencia y tecnología</option>
                    <option value="Entretenimiento">Entretenimiento</option>
                    <option value="Deportes">Deportes</option>
                </select>
                <div className="conteiner-submit-journalist">
                    <div>
                        <input type="checkbox" name="when" id="urgent" />
                        <label htmlFor="when">Urgente</label>
                    </div>
                    <input id='journalist-form' type="submit" value="Enviar Solicitud"/>
                </div>
            </form>
            <button className='back' onClick={backMainPage}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                </svg>
                Volver
            </button>
	    </div>
        </div>
        </div>
    )
}

export default FormJournalist;