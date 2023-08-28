import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import WelcomeScreen from './components/WelcomeText';
import Foreground from './components/Foreground';
import {React, useState, useEffect} from 'react'


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
        console.log(screenMode);
    };

    useEffect(() => {
        console.log('Clicked buttons updated:', clickedButtons);
    }, [clickedButtons]);


    const identityTypes = ["engineer", "author", "artist"];

    return (
        <div className="App-header">

            <div className={`topnav-containerz ${showTopNav ? 'show' : ''}`}>
                < TopNav
                    handleButtonClick = {handleButtonClick}
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
