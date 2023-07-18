import React, {useEffect, useState} from 'react'
import { validateEmail } from './Validaciones';

const EditAccounts = ({setDisplayEditAccounts,setDisplayAdminPage,UserId}) => {

    const [errorLogin, setErrorLogin] = useState('');
    const [users, setUsers] = useState([]);
    const [usuario, setUsuario] = useState({
        UserName: '',
        UserEmail: '',
        UserPassword: '',
        UserTypeID: 1,
      });

    const backManageAccounts = () => {
        setDisplayEditAccounts(false);        
        setDisplayAdminPage(true);
    }

    const deleteUser = () => {
        fetch(`http://127.0.0.1:8000/api/users/${UserId}/`, {
            method: 'DELETE'
        })
        .then((response) => {
        if (response.ok) {
            console.log('La solicitud DELETE fue exitosa.');
        } else {
            console.log('La solicitud DELETE falló.');
        }
        })
        .catch((error) => {
            console.error('Error en la solicitud DELETE:', error);
        });
        setDisplayEditAccounts(false);        
        setDisplayAdminPage(true);
    }

    const getData = (e) => {
        e.preventDefault();

        let tempUser = {
            UserId: UserId,
			UserName: e.target.createAccountUser.value,
			UserEmail: e.target.createAccountEmail.value,
            UserPassword: e.target.createAccountPassword.value,
            UserTypeID: parseInt(e.target.createAccountType.value)
		};

        if (
            tempUser.UserName.length > 0 &&
            validateEmail(tempUser.UserEmail) &&
            tempUser.UserPassword.length > 0
        ) {
            // Validar si el usuario existe o no y agregarlo o negarlo.

            if (users)  {
                let coincidences = users.filter((user) => {
                    return user.UserEmail === tempUser.UserEmail && user.UserId !== tempUser.UserId;
                });

                if (coincidences.length === 0) {
                    fetch(`http://127.0.0.1:8000/api/users/`, {
                        method: 'PUT',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(tempUser),
                    })
                    .then((response) => {
                    if (response.ok) {
                        console.log('Usuario Editado correctamente');
                    } else {
                        console.log('No se pudo editar, intentelo denuevo');
                    }
                    })
                    .catch((error) => {
                        console.error('Error en la solicitud PUT:', error);
                    });

                    setErrorLogin('');

                    //Cerrar EditAccount
                    setDisplayEditAccounts(false);        
                    setDisplayAdminPage(true);
                } else {
                    setErrorLogin('Este Correo Electronico Ya Esta En Uso.');
                }
            }
        } else {
            setErrorLogin('Ingrese correctamente los datos');
        }
    }

    useEffect(()=>{
        //Solicitar Usuario
        fetch('http://127.0.0.1:8000/api/users/')
            .then(response => response.json())
            .then(data => {
                setUsuario(data.find(item => item.UserId === UserId));
            })
            .catch(error => {
                // Maneja los errores aquí
                console.error('Error:', error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        // Solicitud de usuarios
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errorLogin])

    return (
    <div className='background-login'>
    <div className='conteiner-general'>
        <form className='login-form create-account-form' onSubmit={getData}>
            <h1 className='login-form-title'>Editar Cuenta</h1>
            <div className='top-form'>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="8" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <input  className='login-user' type="text" placeholder='Nombre'
                            id='createAccountUser' name='user' autoComplete='off'
                            value={usuario.UserName} onChange={e => setUsuario({...usuario, UserName: e.target.value})}/>
                </div>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <input  className='login-email' type="email" placeholder='Correo Electronico'
                            id='createAccountEmail' name='email' autoComplete='off'
                            value={usuario.UserEmail} onChange={e => setUsuario({...usuario, UserEmail: e.target.value})}/>    
                </div>
                <div className='icon-in-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                    <input  className='login-password' type="password" placeholder='Contraseña'
                            id='createAccountPassword' name='password' autoComplete='off'
                            value={usuario.UserPassword} onChange={e => setUsuario({...usuario, UserPassword: e.target.value})}/>
                </div>
                <div className='flex-right'>
                    <select id="createAccountType" name='type' value={usuario.UserTypeID} onChange={e => setUsuario({...usuario, UserTypeID: e.target.value})}>
                        <option value='1'>Usuario</option>
                        <option value='2'>Periodista</option>
                        <option value='3'>Admin</option>
                    </select>
                </div>
                <span className='error-message'>{errorLogin ? errorLogin : ''}</span>
                <div className="half">
                    <button id='loginButton' type='submit'>Confirmar Cambios</button>
                    <span id='deleteAccount' onClick={deleteUser}>Eliminar Cuenta</span>
                </div>
            </div>
        </form>
        <button className='back' onClick={backManageAccounts}>
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

export default EditAccounts;