import { React, useState, useEffect } from 'react'

import './App.css';
import './styles/topnavStyles.css';
import TopNav from './components/Nav/TopNav';
import Foreground from './components/Foreground';
import LinkToSocial from './components/Overlay/LinkToSocial';

import SocialModal from './components/Overlay/SocialModal';

import socials from './utilities/Socials'


function App() {
    const [socialModalIndex, setSocialModalIndex] = useState(null);

    const [modalContentIndex, setModalContentIndex] = useState(null);
    const [modalContentType, setModalContentType  ] = useState(null);

    const openSocialModal = (index) => {
        setSocialModalIndex (index);
    }

    const closeModal = () => {
        setSocialModalIndex(null);
    }

    const [showTopNav, setShowTopNav]         = useState (false);
    const [currentScreen, setCurrentScreen]   = useState ('welcome');
    const [clickedButton, setClickedButton]   = useState (null);

    const handleButtonClick = (screenMode) => {
        setClickedButton (screenMode)
    };

    const identityTypes = ["engineer", "author", "artist"];

    const [modalChild, setModalChild] = useState(<p1 className="background-text">Modal Child</p1>)

    return (
        <div className="App-header">

            <div className={`topnav-containerz ${showTopNav ? 'show' : ''}`}>
                <TopNav
                    handleButtonClick    = {handleButtonClick}
                    currentScreen        = {currentScreen}
                    setCurrentScreen     = {setCurrentScreen}
                    openModal            = {openSocialModal }
                    closeModal           = {closeModal}
                />
            </div>

            <Foreground
                currentScreen     = {currentScreen}
                setCurrentScreen  = {setCurrentScreen}
                clickedButtons    = {clickedButton}
                setClickedButtons = {setClickedButton}
                handleButtonClick = {handleButtonClick}
                identityTypes     = {identityTypes}
            />

            {socialModalIndex !== null &&
                <SocialModal
                    handleClose={closeModal}
                    socialModalIndex={socialModalIndex}
                />
            } 

        </div>
    );
}


export default App;
