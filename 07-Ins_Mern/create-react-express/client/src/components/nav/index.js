// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
import { Link } from 'react-router-dom'
// stateless functional component that returns html (jsx)
const navBar = (props) => {
    return (
        //    <route><Route path="home" component = {home}/></route>
        <div className="banner">
            <h1>Google Books</h1>
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
        </div>
    );
}

export default navBar;