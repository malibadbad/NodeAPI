const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000
const app = express();
const cors = require("cors");


const dotenv = require("dotenv");

dotenv.config();


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);

mongoose.connect('mongodb+srv://merrybeth:12345@5425-labs.nyll9un.mongodb.net/?retryWrites=true&w=majority');

