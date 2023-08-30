import { React, useState, useEffect } from 'react'

import './App.css';
import TopNav from './components/TopNav';
import Foreground from './components/Foreground';

function App() {

    const [showTopNav, setShowTopNav]         = useState(false);
    const [currentScreen, setCurrentScreen]   = useState('welcome');
    const [clickedButtons, setClickedButtons] = useState({
        engineer: false,
        author: false,
        artist: false
    });


    const handleButtonClick = (screenMode) => {
        switch (screenMode) {
            case ("engineer"):
                setClickedButtons(
                    {
                        engineer: true,
                        author: false,
                        artist: false
                    }
                );
                break;
            case ("author"):
                setClickedButtons(
                    {
                        engineer: false,
                        author: true,
                        artist: false
                    }
                );
                break;
            case ("artist"):
                setClickedButtons(
                    {
                        engineer: false,
                        author: false,
                        artist: true
                    }
                );
                break;
            default:
                setClickedButtons(
                    {
                        engineer: false,
                        author: false,
                        artist: false
                    }
                );
        }
    };

    const identityTypes = ["engineer", "author", "artist"];

    return (
        <div className="App-header">

            <div className={`topnav-containerz ${showTopNav ? 'show' : ''}`}>
                < TopNav
                    handleButtonClick = {handleButtonClick}
                    currentScreen     = {currentScreen}
                    setCurrentScreen  = {setCurrentScreen}
                />
            </div>

            <Foreground
                currentScreen     = {currentScreen}
                setCurrentScreen  = {setCurrentScreen}
                clickedButtons    = {clickedButtons}
                setClickedButtons = {setClickedButtons}
                handleButtonClick = {handleButtonClick}
                identityTypes     = {identityTypes}
            />

        </div>
    );
}


export default App;
