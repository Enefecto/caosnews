import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage.jsx';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import Article from './components/Article';
import FormJournalist from './components/FormJournalist';
import AdminPage from './components/AdminPage';
import { SaveStorage } from './components/SaveStorage';
import Contact from './components/Contact';

function App() {

    // Estados de paginas
    const [displayMainPage, setDisplayMainPage] = useState(true);   
    const [displayLogin, setdisplayLogin] = useState(false);
    const [displayCreateAccount, setdisplayCreateAccount] = useState(false);
    const [displayArticle, setDisplayArticle] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);
    const [displayAdminPage, setDisplayAdminPage] = useState(false);
    const [displayContactPage, setDisplayContactPage] = useState(false);

    //¿Usuario logeado?
    const [sessionStarted, setSesionStarted] = useState(false);
    const [user, setUser] = useState({});

    //Es admin?
    const [buttonAdmin, setButtonAdmin] = useState(false);

    //Periodistas
    const [listJournalist, setListJournalist] = useState([]);

    //Post, PostId, Status
    const [posts,setPosts] = useState([]);
    const [postId, setPostId] = useState(0);
    const [status, setStatus] =  useState(false);


    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('users'));
        if (!storage){
            //Admin
            let tempUser = {
                id: new Date().getTime(),
                name: 'Admin',
                email: 'admin@gmail.com',
                password: '123',
                type: 'Admin'
            };
            SaveStorage('users',tempUser);
            //Periodista
            tempUser = {
                id: new Date().getTime(),
                name: 'Pancho Saavedra',
                email: 'periodista@gmail.com',
                password: '123',
                type: 'Journalist'
            };
            SaveStorage('users',tempUser);
        }
    },[])

    if (displayMainPage){
        return (
        <>
            <MainPage   setDisplayMainPage={setDisplayMainPage}
                        setdisplayLogin={setdisplayLogin}
                        sessionStarted={sessionStarted}
                        user={user}
                        setDisplayArticle={setDisplayArticle}
                        setDisplayForm={setDisplayForm}
                        setDisplayAdminPage={setDisplayAdminPage}
                        listJournalist={listJournalist}
                        setListJournalist={setListJournalist}
                        posts={posts}
                        setPosts={setPosts}
                        setPostId={setPostId}
                        buttonAdmin={buttonAdmin}
                        setButtonAdmin={setButtonAdmin}
                        setDisplayContactPage={setDisplayContactPage}/>
        </>
        );
    } else if (displayArticle){
        return (
        <>
            <Article    setDisplayArticle={setDisplayArticle}
                        setDisplayMainPage={setDisplayMainPage}
                        setDisplayAdminPage={setDisplayAdminPage}
                        postId={postId}
                        status={status}
                        setStatus={setStatus}
                        setPosts={setPosts}
                        buttonAdmin={buttonAdmin}/>
        </>
        );
    } else if (displayLogin){
        return (
        <>
            <Login      setdisplayLogin={setdisplayLogin}
                        setdisplayCreateAccount={setdisplayCreateAccount}
                        setDisplayMainPage={setDisplayMainPage}
                        setSesionStarted={setSesionStarted}
                        setUser={setUser}/>
        </>
        );
    } else if (displayCreateAccount){
        return (
        <>
            <CreateAccount  setdisplayLogin={setdisplayLogin}
                            setdisplayCreateAccount={setdisplayCreateAccount}/>
        </>
        );
    } else if (displayForm){
        return (
        <>
            <FormJournalist setDisplayMainPage={setDisplayMainPage}
                            setDisplayForm={setDisplayForm}
                            listJournalist={listJournalist}
                            setPosts={setPosts}/>
        </>
        );
    } else if (displayAdminPage){
        return (
        <>
            <AdminPage  setDisplayMainPage={setDisplayMainPage}
                        setDisplayAdminPage={setDisplayAdminPage}
                        setDisplayArticle={setDisplayArticle}
                        posts={posts}
                        setPosts={setPosts}
                        setPostId={setPostId}
                        setStatus={setStatus}/>
        </>
        );
    } else if (displayContactPage){
        return (
            <>
                <Contact    setDisplayContactPage={setDisplayContactPage}
                            setDisplayMainPage={setDisplayMainPage}/>
            </>
        )
    }
}

export default App;