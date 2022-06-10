import React from "react";
import './App.css'

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const App = () => {
    return (
        <div>
            <Header/>
            <Note/>
            <Footer/>
        </div>
    )
}

export default App;