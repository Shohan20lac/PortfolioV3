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

    const goToEngineer = () => {
        setCurrentScreen("engineer");
    };

    const goToAuthor = () => {
        setCurrentScreen("author");
    };

    const goToArtist = () => {
        setCurrentScreen("artist");
    };

    return (
        <p>
            {currentScreen === "welcome" &&
                <WelcomeScreen
                goToEngineer = {goToEngineer}
                goToAuthor   = {goToAuthor}
                goToArtist   = {goToArtist}
                />}
            {currentScreen === "engineer" && <EngineerScreen/>}
            {currentScreen === "author"   && <AuthorScreen  />}
            {currentScreen === "artist"   && <ArtistScreen  />}
        </p>
    );
}

export default Foreground;