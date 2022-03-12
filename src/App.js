import 'antd/dist/antd.css';
import './App.css';
import BackgroundImage from './components/BackgroundImage';
import ConfigPanel from './components/ConfigPanel';
import MusicController from './components/MusicController';
import MusicDisplayPanel from './components/MusicDisplayPanel';
import ContextProvider from './services/Context/Context';

function App() {
    return (
        <ContextProvider>
            <div className="App">
                <MusicController />
                <MusicDisplayPanel />
                <ConfigPanel />
                <BackgroundImage />
            </div>
        </ContextProvider>
    );
}

export default App;
