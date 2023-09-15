import { React , useState }from 'react';
import ReactDOM from 'react-dom/client';
import WelcomeText from './SectionHeader/WelcomeText';
import EngineerScreen from './Route/EngineerScreen';
import AuthorScreen from './Route/AuthorScreen';
import ArtistScreen from './Route/ArtistScreen';
import Buttons from './Input/Buttons';

import { motion } from "framer-motion"


const screenModes = [
    "welcome",
    "engineer",
    "author",
    "artist"
]

function Foreground (props) {

    return (
        <div className ="foreground">
            <motion.div
                className = {`transition-container ${props.currentScreen !== 'welcome' ? 'fade-out' : ''}`}
                initial   = {{ x: 0, opacity: 0, scale: 0.8 }}
                animate   = {{ x: 0, opacity: 1, scale: 1 }}
                transition= {{ duration: 1 }}
            >
                <WelcomeText/>
            </motion.div>

            {props.currentScreen === "engineer" && <EngineerScreen />}

            {props.currentScreen === "author" && <AuthorScreen />}

            {props.currentScreen === "artist" && <ArtistScreen />}
        </div>
    );
}

export default Foreground;