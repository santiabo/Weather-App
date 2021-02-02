import React from 'react'
import '../containers/App.css';

import Linkedin from '../img/linkedin.png'
import GitHub from '../img/github.png'

export default function About() {
    return (
        <div className="about">
            <h2>Aguirre Santiago</h2>
            <a href="https://www.linkedin.com/in/santiago--aguirre/"> <img id="linkedin" src={Linkedin} width="55" height="55" className="d-inline-block align-top" alt="" /></a>
            <a href="https://www.linkedin.com/in/santiago--aguirre/"> <img id="github" src={GitHub} width="55" height="55" className="d-inline-block align-top" alt="" /></a>
            <h2>santiabo@gmail.com</h2>

        </div>
    );
}