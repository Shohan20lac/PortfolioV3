import { React , useState }from 'react';
import ReactDOM from 'react-dom/client';
import WelcomeText from './WelcomeText';
import EngineerScreen from './EngineerScreen';
import AuthorScreen from './AuthorScreen';
import ArtistScreen from './ArtistScreen';
import Buttons from './Buttons';

const screenModes = [
    "welcome",
    "engineer",
    "author",
    "artist"
]

function Foreground (props) {

    return (
        <p>

            <div className={`transition-container ${props.currentScreen !== 'welcome' ? 'fade-out' : ''}`}>
                <WelcomeText
                    updateClickedButtons={props.handleButtonClick}
                    setCurrentScreen={props.setCurrentScreen}
                />
            </div>

            {props.currentScreen === "engineer" && <EngineerScreen />}

            {props.currentScreen === "author" && <AuthorScreen />}

            {props.currentScreen === "artist" && <ArtistScreen />}
        </p>
    );
}

export default Foreground;