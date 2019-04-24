// handles submission of new books
// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// stateless functional component that returns html (jsx)
const form = (props) => {
    return (
        //    <route><Route path="home" component = {home}/></route>
        <div className="banner">
            <h1>Add a Book</h1>
            <form>
                <input name="Author" type="text"></input>
                <input name="Title" type="text"></input>
                <input name="" type="text"></input>
            </form>
            
        </div>
    );
}

export default form;