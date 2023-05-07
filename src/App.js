import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage.jsx';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import Article from './components/Article';
import FormJournalist from './components/FormJournalist';
import AdminPage from './components/AdminPage';

function App() {

    // Estados de paginas
    const [displayMainPage, setDisplayMainPage] = useState(true);   
    const [displayLogin, setdisplayLogin] = useState(false);
    const [displayCreateAccount, setdisplayCreateAccount] = useState(false);
    const [displayArticle, setDisplayArticle] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);
    const [displayAdminPage, setDisplayAdminPage] = useState(false);

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
                        setDisplayArticle={setDisplayArticle}
                        setDisplayForm={setDisplayForm}
                        setDisplayAdminPage={setDisplayAdminPage}/>
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
    } else if (displayForm){
        return (
        <>
            <FormJournalist setDisplayMainPage={setDisplayMainPage}
                            setDisplayForm={setDisplayForm}/>
        </>
        );
    } else if (displayAdminPage){
        return (
        <>
            <AdminPage setDisplayMainPage={setDisplayMainPage}
                            setDisplayAdminPage={setDisplayAdminPage}/>
        </>
        );
    }
}

export default App;