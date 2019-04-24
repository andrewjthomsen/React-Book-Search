// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// stateless functional component that returns html (jsx)
const results = (props) => {
    return (
        <div className="results">
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <div>{props.image}</div>
        <p>{props.description}</p>
           <button>View</button>
           <button>Save</button>
        </div>
    );
}

export default results;