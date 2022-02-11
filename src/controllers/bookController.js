const Book = require('../models/bookModel');
exports.addBook = async (req, res) => {
    try {
        // define a new product schema, define data from request body
        let book = new Book({
            book_id: req.body.book_id,
            name: req.body.name,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price
            // no reviews yet for now
        });
        // store result from saving
        let createdBook = await book.save();
        res.status(200).json({
            msg: "Add a Book complete.",
            data: createdBook
        });
    } catch (err) {
        // if there is an error, it will jump to here
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
};