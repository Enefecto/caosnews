import React, {useState,useEffect} from 'react'

const ManageAccounts = ({setDisplayEditAccounts,setDisplayAdminPage,setUserId}) => {

    const [users, setUsers] = useState([]);

    const getUserType = (type) => {

        switch (type) {
            case 1:
                return 'Usuario'
            case 2:
                return 'Periodista';
            case 3:
                return 'Admin';
            default:
                return 'Usuario';
        }
    }

    const activateEditAccount = (id) => {
        setUserId(id);
        setDisplayAdminPage(false);
        setDisplayEditAccounts(true);
    } 

    useEffect(()=>{
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
    },[])

    return (
    <div className="conteiner-manage">
            <div className="manage-top">
                <h2>Administrar Cuentas</h2>
            </div>
            <ul className="manage-posts">
                {
                    users ? users.filter((user) => user.UserTypeID !== 3).map((user) => (
                        <li key={user.UserId} className="account" onClick={()=>activateEditAccount(user.UserId)}>
                            <span id='account-name'>{user.UserName}</span>
                            <span id='account-gmail'>{user.UserEmail}</span>
                            <span id='account-type'>{getUserType(user.UserTypeID)}</span>
                        </li>
                    ))
                    :
                    <span id='No-posts'>No hay noticias</span>
                }
            </ul>
        </div>
  )
  
}

export default ManageAccounts;