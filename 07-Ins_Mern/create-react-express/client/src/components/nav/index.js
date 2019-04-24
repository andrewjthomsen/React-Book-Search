// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
const navBar = (props) => {
    return (
        //    <route><Route path="home" component = {home}/></route>
        <div className="banner">
            <h1>Google Books</h1>
            <a href='#!' onClick={ (ev) => { ev.preventDefault() ; props.onNavClick('search'); } }>Search</a>
            <a href='#!' onClick={ (ev) => { ev.preventDefault() ; props.onNavClick('saved'); } }>Saved</a>
        </div>
    );
}

export default navBar;