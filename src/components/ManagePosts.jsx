import React from 'react'

const ManagePosts = ({posts,setPostId,setStatus,setDisplayAdminPage,setDisplayArticle}) => {
    
    const activateArticle  = (id) => {
        setPostId(id);
        setStatus(true);
        setDisplayAdminPage(false);
        setDisplayArticle(true);
    }
    
    return (
        <div className="conteiner-manage">
            <div className="manage-top">
                <h2>Administrar Publicaciones</h2>
            </div>
            <ul className="manage-posts">
                {
                    posts ? posts.filter((post) => !post.state).map((post) => (
                        <li key={post.id} className="post" onClick={() => activateArticle(post.id)}>
                            <span id='post-tittle'>{post.title}</span>
                            <div className="post-bottom">
                                <span id='post-author'>{post.author}</span>
                                <span id='post-type'>{post.type}</span>
                                <span id='post-urgent'>Urgente: <span id='urgent-state'>{post.urgent ? 'Si' : 'No'}</span></span>
                            </div>
                        </li>
                    ))
                    :
                    <span id='No-posts'>No hay noticias</span>
                }
            </ul>
            
        </div>
    )
}

export default ManagePosts;