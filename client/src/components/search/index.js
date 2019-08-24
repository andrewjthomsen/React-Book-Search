import React from "react"
// stateless functional component that returns html (jsx)
function searchBook(props) {
    return (
        <div id="searchContainer">
            <h3>Book Search</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
                <br></br>
                <input onChange={(e) => props.handleChange(e)} type="text" name="bookInput" id="bookInput" form="bookSearch" placeholder="Book Title" required/> 
                
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}
export default searchBook;