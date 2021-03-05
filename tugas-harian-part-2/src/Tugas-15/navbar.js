import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './navbar.css';
import {NavbarContext} from "./navbarContext";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import FormBuah from '../Tugas-9/FormBuah'
import ListBuah from '../Tugas-10/ListBuah'
import Timer from '../Tugas-11/Timer'
import UpdateBuah from '../Tugas-12/UpdateBuah'
import UpdateBuah2 from '../Tugas-13/UpdateBuah2'
import Buah from '../Tugas-14/Buah'
import home from './home'
import DarkMode from '../Tugas-15/DarkMode'

const Nav = () => {
    const [namaClass, setNamaClass] = useContext(NavbarContext)

    const gantiTema = () => {
        let x = document.getElementById('navbar')
        let y = document.getElementById('buttonChange')
        
        if (namaClass === 'navbarTugas'){
            setNamaClass('navbarTugasDark')
            return y.style.backgroundColor = "lightskyblue"
        } 
        
        else {
            setNamaClass('navbarTugas')
            return y.style.backgroundColor = "darkslategrey"
        }
    }

    return(
        <Router>
        <div>
            <ul id = "navbar" className={namaClass}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Tugas-9">Tugas 9</Link>
                </li>
                <li>
                    <Link to="/Tugas-10">Tugas 10</Link>
                </li>
                <li>
                    <Link to="/Tugas-11">Tugas 11</Link>
                </li>
                <li>
                    <Link to="/Tugas-12">Tugas 12</Link>
                </li>
                <li>
                    <Link to="/Tugas-13">Tugas 13</Link>
                </li>
                <li>
                    <Link to="/Tugas-14">Tugas 14</Link>
                </li>
                <li>
                    <Link to="/Tugas-15">Tugas 15</Link>
                </li>
            </ul>

                <Switch>
                    <Route exact path ="/" component={home}/>
                    <Route exact path ="/Tugas-9" component={FormBuah}/>
                    <Route exact path ="/Tugas-10" component={ListBuah}/>
                    <Route exact path ="/Tugas-11" component={Timer}/>
                    <Route exact path ="/Tugas-12" component={UpdateBuah}/>
                    <Route exact path ="/Tugas-13" component={UpdateBuah2}/>
                    <Route exact path ="/Tugas-14" component={Buah}/>
                    <Route exact path ="/Tugas-15" component={DarkMode}/>
                </Switch>
        </div>
        </Router>
    )
}

export default Nav;