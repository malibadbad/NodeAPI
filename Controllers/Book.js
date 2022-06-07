const Book = require("../Model/Book");


const getBooks = (req, res) => {
    Book.find((err, book) => {
      if (err) {
        res.send(err);
      }
      res.json(book);
    });
  };
  
  const createBook = (req, res) => {
    const book = new Book({
        book_ID: req.body.book_ID,
        title: req.body.title,
        author: {
            first_name: req.body.author.first_name,
            last_name: req.body.author.last_name
        }, 
        isbn: req.body.isbn,
    });
  
    book.save((err, book) => {
      if (err) {
        res.send(err);
      }
      res.json(book);
    });
  };

  const updateBook = (req, res) => {
    Book.findOneAndUpdate(
      { book_id: req.params.book_ID },
      {
        $set: {
            book_ID: req.body.book_ID,
            title: req.body.title,
            isbn: req.body.isbn,
        },
      },
      { new: true },
      (err, Book) => {
        if (err) {
          res.send(err);
        } else res.json(Book);
      }
    );
  };

  const deleteBook = (req, res) => {
    Book.deleteOne({ book_id: req.params.book_ID })
      .then(() => res.json({ message: "Book Deleted" }))
      .catch((err) => res.send(err));
  };
  
  

  module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
  };
  
  