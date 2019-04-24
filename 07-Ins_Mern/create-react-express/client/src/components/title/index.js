// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// stateless functional component that returns html (jsx)
const Title = (props) => {
    return (
        <div className="title">
            <h1>(React) Google Books Search</h1>
            <h2>Search for and Saved Books of Interest</h2>
        </div>
    );
}

export default Title;