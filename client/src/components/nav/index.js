// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
import { Link } from 'react-router-dom'
import { Navbar, Nav, Collapse } from "bootstrap-4-react";
// stateless functional component that returns html (jsx)
const navBar = (props) => {
    return (
        //    <route><Route path="home" component = {home}/></route>
        <Navbar>
            <h1>Google Books </h1>
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
        </Navbar>
    );
}

export default navBar;