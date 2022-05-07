const express = require("express")
const db = require('./db')
const BookModel = require('./models/bookModel')
const cors = require("cors");
const app = express();
app.use(cors());

// Body-parser
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server working");
})

app.get("/getbooks", (req, res) => {
    BookModel.find()
    .then(function(data) {
        res.json(data)
    })
    .catch(function(err) {
        res.json(err)
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running on port " + port)
})