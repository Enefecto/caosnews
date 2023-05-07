import React, { useState } from 'react'
import { CreateAccountAdmin } from './CreateAccountAdmin';

const AdminPage = ({setDisplayMainPage,setDisplayAdminPage}) => {
    
    const [displayCreateAccountAdmin, setDisplayCreateAccountAdmin] = useState(false);

    const backMainPage = () => {
        setDisplayAdminPage(false);
        setDisplayMainPage(true);
    }
    
    const activateAccount = () => {
        setDisplayCreateAccountAdmin(true);
    }

    return (
    
    <div className='background-login'>
    <div className='conteiner-general'>

        <div className="administration">
            <div className="control-panel">
                <button>Administrar Publicaciones</button>
                <button onClick={activateAccount}>Crear Cuenta</button>
            </div>
            <div className="principal-content">
                {displayCreateAccountAdmin ? <CreateAccountAdmin/> : ''}
                
            </div>
        </div>

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

export default AdminPage;