import '../Assets/css/style.css'
import React, {Component} from 'react';

function About() {
    return (
        <section>
            <div style={{padding: "10px", border: "1px solid #ccc", marginTop: "5%"}}>
                <h1 style={{textAlign: "center"}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li><strong style={{width: "100px"}}>Nama:</strong> Arvel Gavrilla Raissananda</li> 
                    <li><strong style={{width: "100px"}}>Email:</strong> arvel.gavrilla@gmail.com</li> 
                    <li><strong style={{width: "100px"}}>Sistem Operasi yang digunakan:</strong> Windows 10</li>
                    <li><strong style={{width: "100px"}}>Akun Github:</strong> LevraGav</li> 
                    <li><strong style={{width: "100px"}}>Akun Telegram:</strong> arvel</li> 
                </ol>
                </div>
        </section>
    )
} 
export default About;