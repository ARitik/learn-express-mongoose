var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true}, //reference to the associated Author Object!
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}] //note the square brackets to indicate an array of Genre objects!!!
                                                        //note: also no required constraint, as a book can have 0 or more genres! 
  }
);

module.exports = mongoose.model('Book', BookSchema);