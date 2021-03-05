import logo from '../logo.svg';
import '../App.css';

function home(){
    return(
        <div className="App">
            <header className="App-Header">
                <img src={logo} className="App-Logo" alt="LogoPic"/>
            </header>
        </div>
    )
}

export default home;