import { React, useState } from 'react'

import './App.css';
import './styles/topnavStyles.css';
import TopNav from './components/Nav/TopNav';
import Foreground from './components/Foreground';

import Modal from './components/Overlay/Modal';

import socials from './utilities/Socials'

function App() {
    const [modalIndex, setModalIndex] = useState (null);
    const openModal = (index) => {
        setModalIndex (index);
    }
    const closeModal = () => {
        setModalIndex (null);
    }

    const [showTopNav, setShowTopNav]         = useState (false);
    const [currentScreen, setCurrentScreen]   = useState ('welcome');
    const [clickedButton, setClickedButton]   = useState (null);

    const handleButtonClick = (screenMode) => {
        setClickedButton (screenMode)
    };

    const identityTypes = ["engineer", "author", "artist"];

    console.log (modalIndex)

    return (
        <div className="App-header">

            <div className={`topnav-containerz ${showTopNav ? 'show' : ''}`}>
                <TopNav
                    handleButtonClick={handleButtonClick}
                    currentScreen={currentScreen}
                    setCurrentScreen={setCurrentScreen}
                    socials={socials}
                    modalIndex={modalIndex}
                    openModal={openModal }
                    closeModal={closeModal}
                />
            </div>

            <Foreground
                currentScreen     = {currentScreen}
                setCurrentScreen  = {setCurrentScreen}
                clickedButtons    = {clickedButton}
                setClickedButtons={setClickedButton}
                handleButtonClick = {handleButtonClick}
                identityTypes     = {identityTypes}
            />

            {modalIndex !== null && 
                <Modal
                modalOpen={modalIndex}
                handleClose={closeModal}
                modalContent={socials[modalIndex]}

                />
            } 

        </div>
    );
}


export default App;
