require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
// app.use(require("./routes"));

mongoose.connect("mongodb+srv://sam:into@cluster0.1sks7.mongodb.net/bsaggregator?retryWrites=true&w=majority")
.then(() => {
    console.log("connected");
    app.listen(port, () => {
        console.log(`server has been started on port ${port}`);
    })
}).catch((e) => {
    console.log(e)
})

