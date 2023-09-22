import { React, useState, useEffect } from 'react'

import './App.css';
import './styles/topnavStyles.css';
import TopNav from './components/Nav/TopNav';
import Foreground from './components/Foreground';
import LinkToSocial from './components/Overlay/LinkToSocial';

import SocialModal from './components/Overlay/SocialModal';

import socials from './utilities/Socials'


function App() {
    const [modalContentIndex, setModalContentIndex] = useState (null);
    const [modalContentType, setModalContentType  ] = useState(null);

    const openModal = (type, index) => {
        setModalContentIndex (index);
        setModalContentType({type});
    }
    const closeModal = () => {
        setModalContentType(null);
        setModalContentIndex(null);
        console.log ("modal content set to null")
    }

    const [showTopNav, setShowTopNav]         = useState (false);
    const [currentScreen, setCurrentScreen]   = useState ('welcome');
    const [clickedButton, setClickedButton]   = useState (null);

    const handleButtonClick = (screenMode) => {
        setClickedButton (screenMode)
    };

    const identityTypes = ["engineer", "author", "artist"];


    const [modalChild, setModalChild] = useState(<p1 className="background-text">Modal Child</p1>)

    useEffect(
        (modalContentIndex, modalContentType) => {

            console.log("modal content type or index changed")
            if (modalContentType === "soc") {
                setModalChild (
                    <LinkToSocial
                        modalContentIndex = {modalContentIndex}
                        handleClose       = {closeModal}
                    />
                );
            }

        },
        [modalContentIndex, modalContentType]
    )

    return (
        <div className="App-header">

            <div className={`topnav-containerz ${showTopNav ? 'show' : ''}`}>
                <TopNav
                    handleButtonClick    = {handleButtonClick}
                    currentScreen        = {currentScreen}
                    setCurrentScreen     = {setCurrentScreen}
                    setModalContentIndex = {modalContentIndex}
                    setModalContentType  = {modalContentType}
                    openModal            = {openModal }
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

            {modalContentType !== null && 
                <SocialModal
                    handleClose       = {closeModal}
                    modalContentIndex = {modalContentIndex}
                    modalContentType  = {setModalContentType}
                />
            } 

        </div>
    );
}


export default App;
