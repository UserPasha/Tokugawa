import React from 'react';
import "./App.css"
import {Navbar} from "./Components/Navbar/Navbar";
import {Header} from "./Components/Header/Header";
import {Title} from "./Components/Title/Title";


function App() {
    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar/>
            <div className={"content"}>
               <Title text={"Blogs"}/>
                <div>Search+Filter</div>
                <div>MappingPosts</div>
            </div>
        </div>

    );
}

export default App;
