import React, { useState } from 'react'
import CreateAccountAdmin from './CreateAccountAdmin';
import ManagePosts from './ManagePosts';
import ManageAccounts from './ManageAccounts';

const AdminPage = ({setDisplayMainPage,setDisplayAdminPage,setDisplayEditAccounts,posts,setPosts,setPostId,setStatus,setDisplayArticle,setUserId}) => {
    
    const [switchDisplayer, setSwitchDisplayer] = useState(0);


    const backMainPage = () => {
        setDisplayAdminPage(false);
        setDisplayMainPage(true);
    }

    const activateManagePosts = () => {
        setSwitchDisplayer(0);
    }
    
    const activateAccount = () => {
        setSwitchDisplayer(1);
    }


    const activateManageAccounts = () => {
        setSwitchDisplayer(2);
    }

    return (
    
    <div className='background-login'>
    <div className='conteiner-general'>

        <div className="administration">
            <div className="control-panel">
                <button onClick={activateManagePosts}>Administrar Publicaciones</button>
                <button onClick={activateAccount}>Crear Cuenta</button>
                <button onClick={activateManageAccounts}>Administrar Cuentas</button>
            </div>
            <div className="principal-content">
                {switchDisplayer === 0 ? <ManagePosts  posts={posts}
                                                    setPostId={setPostId}
                                                    setStatus={setStatus}
                                                    setDisplayAdminPage={setDisplayAdminPage}
                                                    setDisplayArticle={setDisplayArticle}
                                                    setPosts={setPosts}/> 
                : ''}
                {switchDisplayer === 1 ? <CreateAccountAdmin/> : ''}
                {switchDisplayer === 2 ? <ManageAccounts    setDisplayEditAccounts={setDisplayEditAccounts}
                                                            setDisplayAdminPage={setDisplayAdminPage}
                                                            setUserId={setUserId}/> : ''}
                
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