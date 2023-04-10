import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage.jsx';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';

function App() {

    const [displayMainPage, setDisplayMainPage] = useState(true);
    const [displayLogin, setdisplayLogin] = useState(false);
    const [displayCreateAccount, setdisplayCreateAccount] = useState(false);

    if (displayMainPage){
        return (
        <>
            <MainPage   setDisplayMainPage={setDisplayMainPage}
                        setdisplayLogin={setdisplayLogin}/>
        </>
        );
    } else if (displayLogin){
        return (
        <>
            <Login      setdisplayLogin={setdisplayLogin}
                        setdisplayCreateAccount={setdisplayCreateAccount}/>
        </>
        );
    } else if (displayCreateAccount){
        return (
        <>
            <CreateAccount />
        </>
        );
    }
}

export default App;