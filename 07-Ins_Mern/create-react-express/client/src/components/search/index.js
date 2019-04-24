// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// stateless functional component that returns html (jsx)
const searchBook = (props) => {
    return (
        <div className="search">
            <h3>Book Search</h3>
            <h5>Book</h5>
            <form><input type='text' className="search"></input></form>
            <button onClick={props.handleFormSubmit} className="submit" type="submit">Search</button>
        </div>
    );
}

export default searchBook;