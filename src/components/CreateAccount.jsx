import React, { useState } from 'react'
import { SaveStorage } from './SaveStorage';

const CreateAccount = ({setdisplayLogin,setdisplayCreateAccount}) => {
    
    const [errorLogin, setErrorLogin] = useState('');

    const getData = (e) => {
        e.preventDefault();

        // Obtener previos registros de usuarios
        let storage = JSON.parse(localStorage.getItem('users'));
        
        // Crear nuevo usuario temporalmente
        let tempUser = {
            id: new Date().getTime(),
			name: e.target.createAccountUser.value,
			email: e.target.createAccountEmail.value,
            password: e.target.createAccountPassword.value,
            type: e.target.createAccountType.value
		};

        // Validar si el usuario existe o no y agregarlo o negarlo.
        if (!storage){
            SaveStorage('users',tempUser);
            //Cerrar CreateAccount
            setdisplayCreateAccount(false);
            setdisplayLogin(true);
        } else {
            let coincidences = storage.filter( user => {
                return user.email === tempUser.email;
            });
            
            if (coincidences.length === 0){
                // Save in localStorage
                SaveStorage('users',tempUser);

                setErrorLogin('');

                //Cerrar CreateAccount
                setdisplayCreateAccount(false);
                setdisplayLogin(true);
            } else {
                setErrorLogin('Este Correo Electronico Ya Esta En Uso.');
            }
        }
    }
    
    return (
    <div className='background-login'>
    <div className='conteiner-login'>
        <form className='login-form create-account-form' onSubmit={getData}>
            <h1 className='login-form-title'>Crear Cuenta</h1>
            <div className='top-form'>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="8" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <input  className='login-user' type="text" placeholder='Nombre'
                            id='createAccountUser' name='user' autoComplete='off'/>
                </div>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <input  className='login-email' type="email" placeholder='Correo Electronico'
                            id='createAccountEmail' name='email' autoComplete='off'/>    
                </div>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                    <input  className='login-password' type="password" placeholder='Contraseña'
                            id='createAccountPassword' name='password' autoComplete='off'/>
                </div>
                <div className='flex-right'>
                    <select id="createAccountType" name='type'>
                        <option value='User'>Usuario</option>
                        <option value='journalist'>Periodista</option>
                        <option value='Admin'>Admin</option>
                    </select>
                </div>
                <span className='error-message'>{errorLogin ? errorLogin : ''}</span>
                <button id='loginButton' type='submit'>Crear Cuenta</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default CreateAccount;