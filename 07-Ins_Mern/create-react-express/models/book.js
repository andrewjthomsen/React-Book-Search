const mongoose = require('mongoose');

// schema
const Schema = mongoose.Schema;
// Article schema
const bookSchema = new Schema({
    //title
    title: {type: String, require: true},
    //authors
    authors: [{type: String, require: true}],
    //description
    description: {type: String, require: true},
    //image
    image: {type: String, require: true},
    //link
    link: {type: String, require: true}
});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", bookSchema); 
// export
module.exports = Book;