import 'antd/dist/antd.css';
import './App.css';
import Bg from './components/Bg';
import Controller from './components/Controller';
import Display from './components/Display';
import Settings from './components/Settings';
import ContextProvider from './services/Context/Context';

function App() {
    return (
        <ContextProvider>
            <div className="App">
                <Controller />
                <Settings />
                <Display />
                <Bg />
            </div>
        </ContextProvider>
    );
}

export default App;
