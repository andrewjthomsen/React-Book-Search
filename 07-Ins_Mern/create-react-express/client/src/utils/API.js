import axios from "axios";

export default {
   getBooks: () => {
       return axios.get("/api/books");
   },
   searchBooks: (title) => {
       console.log("This: " + title);
       return axios.post("https://www.googleapis.com/books/v1/volumes?q=" + title);
    //    console.log("This: " + title);
    //    return axios.post("/search", {title: title});
   },
   saveBook: (bookData) => {
       return axios.post("/api/books", bookData);
   },
   deleteBook: (id) => {
       return axios.delete(`/api/books/${id}`);
   }
}

