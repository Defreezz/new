import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {LfaJob} from "./LfaJob/LfaJob";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {About} from "./Main/About/About";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <LfaJob/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
