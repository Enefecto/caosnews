import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage.jsx';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import Article from './components/Article';

function App() {

    // Estados de paginas
    const [displayMainPage, setDisplayMainPage] = useState(true);   
    const [displayLogin, setdisplayLogin] = useState(false);
    const [displayCreateAccount, setdisplayCreateAccount] = useState(false);
    const [displayArticle, setDisplayArticle] = useState(false);

    //¿Usuario logeado?
    const [sessionStarted, setSesionStarted] = useState(false);
    const [user, setUser] = useState({});

    if (displayMainPage){
        return (
        <>
            <MainPage   setDisplayMainPage={setDisplayMainPage}
                        setdisplayLogin={setdisplayLogin}
                        sessionStarted={sessionStarted}
                        user={user}
                        setDisplayArticle={setDisplayArticle}/>
        </>
        );
    } else if (displayArticle){
        return (
        <>
            <Article    setDisplayArticle={setDisplayArticle}
                        setDisplayMainPage={setDisplayMainPage}/>
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
    }
}

export default App;