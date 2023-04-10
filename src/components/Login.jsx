import React from 'react'

const Login = () => {
  return (
    <div className='background-login'>
    <div className='conteiner-login'>
        <form className='login-form'>
            <h1 className='login-form-title'>Bienvenido</h1>
            <div className='top-form'>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <input id='login-email' type="email" placeholder='Correo Electronico'/>    
                </div>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                    <input id='login-password' type="password" placeholder='Contraseña'/>
                </div>
                <div className='flex-right'>
                    <span id='forgotPassword'>¿Has Olvidado Tu Contraseña?</span>
                </div>
                <button id='loginButton' type='submit'>Ingresar</button>
            </div>
            <div className='bottom-form'>
                <span>¿No Tienes Una Cuenta?
                    <span id='createAccount'>Crear Cuenta</span>
                </span>
            </div>
        </form>
    </div>
    </div>
  )
}
export default Login;