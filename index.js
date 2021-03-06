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

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

