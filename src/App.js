import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import WelcomeScreen from './components/WelcomeScreen';
import Foreground from './components/Foreground';


function App() {
    return (
        <div className = "App-header">
            <TopNav />

            <Foreground />

        </div>
  );
}

export default App;
