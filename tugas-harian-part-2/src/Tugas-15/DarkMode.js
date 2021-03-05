import {NavbarContext} from "./navbarContext";
import React, {useContext} from 'react';
import './Darkmode.css'

function DarkMode(){
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
        <>
        <div className="DarkMode-Page">
            <button id="buttonChange" className="Darkmode-Button" onClick={gantiTema}>Change NavBar Theme</button>
        </div>
        </>
    )
}

export default DarkMode


