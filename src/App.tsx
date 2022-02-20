import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {About} from "./Components/Main/About/About";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";


function App() {
    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
        </ThemeProvider>
    );
}

export default App;
