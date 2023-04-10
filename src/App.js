import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage.jsx';
import Login from './components/Login.jsx';

function App() {

    const [displayMainPage, setDisplayMainPage] = useState(true);
    const [displayLogin, setdisplayLogin] = useState(true);

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
            <Login />
        </>
        );
    }
}

export default App;