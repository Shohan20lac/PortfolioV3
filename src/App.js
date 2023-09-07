import { React, useState, useEffect } from 'react'

import './App.css';
import TopNav from './components/Nav/TopNav';
import Foreground from './components/Foreground';

import { star, heart, hand, plane, lightning, note } from "./paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "./paths";

const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = [
    "#00cc88",
    "#0099ff",
    "#8855ff",
    "#ff0055",
    "#ee4444",
    "#ffcc00",
    "#00cc88"
];

function App() {

    const [showTopNav, setShowTopNav]         = useState(false);
    const [currentScreen, setCurrentScreen]   = useState('welcome');
    const [clickedButton, setClickedButton]   = useState  (null);


    const handleButtonClick = (screenMode) => {
        setClickedButton (screenMode)
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
                clickedButtons    = {clickedButton}
                setClickedButtons={setClickedButton}
                handleButtonClick = {handleButtonClick}
                identityTypes     = {identityTypes}
            />

            

        </div>
    );
}


export default App;
