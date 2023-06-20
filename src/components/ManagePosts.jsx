import React, {useEffect} from 'react'

const ManagePosts = ({posts,setPosts,setPostId,setStatus,setDisplayAdminPage,setDisplayArticle}) => {
    
    const activateArticle  = (id) => {
        setPostId(id);
        setStatus(true);
        setDisplayAdminPage(false);
        setDisplayArticle(true);
    }
    const getType = (type) => {

        switch (type) {
            case 1:
                return 'Noticias Internacionales';
            case 2:
                return 'Ciencia y Tecnología';
            case 3:
                return 'Entretenimiento';
            case 4:
                return 'Deportes';
            default:
                return 'Noticias Internacionales';
        }
    }
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/noticias/')
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta de la solicitud aquí
                setPosts(data);
            })
            .catch(error => {
                // Maneja los errores aquí
                console.error('Error:', error);
        });
        // eslint-disable-next-line
    },[])

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
                                <span id='post-type'>{getType(post.type)}</span>
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