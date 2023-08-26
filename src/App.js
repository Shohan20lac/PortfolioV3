import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import WelcomeText from './components/WelcomeText';

function App() {
    return (
        <div className = "App-header">
            <TopNav />

            <WelcomeText/>
        </div>
  );
}

export default App;
