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
           <button onClick={(event)=>this.props.handleSave(event)}>Save</button>
        </div>
    );
}
// Need to create a clickhandler for save to make an ajax request to save current clicked book
// Inside render need to use .map to render out each searched book
export default results;