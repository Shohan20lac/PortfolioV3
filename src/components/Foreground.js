import { React , useState }from 'react';
import ReactDOM from 'react-dom/client';
import WelcomeScreen from './WelcomeScreen';
import EngineerScreen from './EngineerScreen';
import AuthorScreen from './AuthorScreen';
import ArtistScreen from './ArtistScreen';

const screenModes = [
    "welcome",
    "engineer",
    "author",
    "artist"
]

function Foreground() {

    const [currentScreen, setCurrentScreen] = useState("welcome");

    const changeScreen = (screenName) => {
        setCurrentScreen(screenName);
    };

    return (
        <p>
            {currentScreen === "welcome" &&
                <WelcomeScreen
                    changeScreen={changeScreen}
                />}
            {currentScreen === "engineer" && <EngineerScreen/>}
            {currentScreen === "author"   && <AuthorScreen  />}
            {currentScreen === "artist"   && <ArtistScreen  />}
        </p>
    );
}

export default Foreground;