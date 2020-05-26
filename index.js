// Dependencies
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const config = require('config');

const user = require("./routes/user");
const {cors} = require("./middleware/cors")

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors);

// Connect to MongoDB
const db = config.get('mongoURI');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

//Routes
app.use("/api/user", user);

app.listen(5000, () => {
  console.log("Running on port 5000");
});
