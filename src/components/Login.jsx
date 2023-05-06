import React, {useState} from 'react'

const Login = ({setdisplayCreateAccount,setdisplayLogin,setDisplayMainPage,setSesionStarted,setUser}) => {

    const [errorLogin, setErrorLogin] = useState('');

    const activateCreateAccount = () => {
        setdisplayLogin(false);
        setdisplayCreateAccount(true);
    }

    const tryLogin = (e) => {
        e.preventDefault();

        // Obtener previos registros de usuarios
        let storage = JSON.parse(localStorage.getItem('users'));

        //Guardar temporalmente al usuario para validar login
        let tempUser = {
			email: e.target.createAccountEmail.value,
            password: e.target.createAccountPassword.value,
            type: e.target.createAccountType.value
		};
        
        if (!storage){
            setErrorLogin('No hay usuarios registrados.');
        } else {
            let coincidences = storage.filter( user => {
                return  user.email === tempUser.email
                        && user.password === tempUser.password
                        && user.type === tempUser.type;
            });
            if (coincidences.length === 1){
                setErrorLogin('');
                //Dar iniciada la sesion
                setSesionStarted(true); 
                setUser(coincidences);
                //Volver a la pantalla principal
                setdisplayLogin(false);
                setDisplayMainPage(true);
            } else {
                setErrorLogin('Gmail o contraseña incorrecto.');
            }
        }


    }

    const backMainPage = () => {
        setdisplayLogin(false);
        setDisplayMainPage(true);
    }

    return (
    <div className='background-login'>
    <div className='conteiner-login'>
        <form className='login-form' onSubmit={tryLogin}>
            <h1 className='login-form-title'>Bienvenido</h1>
            <div className='top-form'>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <input  className='login-email' type="email" placeholder='Correo Electronico'
                            id='createAccountEmail'/>    
                </div>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                    <input  className='login-password' type="password" placeholder='Contraseña'
                            id='createAccountPassword'/>
                </div>
                <div className='flex-right'>
                    <select id="createAccountType">
                        <option value='User'>Usuario</option>
                        <option value='Journalist'>Periodista</option>
                        <option value='Admin'>Admin</option>
                    </select>
                    <span id='forgotPassword'>¿Has Olvidado Tu Contraseña?</span>
                </div>
                <button id='loginButton' type='submit'>Ingresar</button>
                <span className='error-message'>{errorLogin ? errorLogin : ''}</span>
            </div>
            <div className='bottom-form'>
                <span>¿No Tienes Una Cuenta?
                    <span id='createAccount' onClick={activateCreateAccount}>Crear Cuenta</span>
                </span>
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
  )
}
export default Login;