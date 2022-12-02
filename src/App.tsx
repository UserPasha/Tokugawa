import React from 'react';
import "./App.css"
import {Navbar} from "./Components/Navbar/Navbar";
import {Header} from "./Components/Header/Header";
import {Title} from "./Components/Title/Title";
import {Blog} from "./Components/Blog/Blog";
import {ShowMore} from "./Components/ShowMore/ShowMore";
import {SearchAndFilter} from "./Components/SearchAndFilter/SearchAndFilter";


function App() {
    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar/>
            <div className={"content"}>
                <Title text={"Blogs"}/>

                <SearchAndFilter/>

                <Blog/>
                <Blog/>
                <ShowMore/>
            </div>
        </div>

    );
}

export default App;
