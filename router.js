const router = require("express").Router();
const { getBooks, createBook, updateBook, deleteBook } = require("./Controllers/Book");


router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/books", getBooks);

router.post("/books", createBook);

router.put("/books/:book_ID", updateBook);

router.delete("/books/:book_ID", deleteBook);



module.exports = router;
