const express = require('express');
const app = express();
const port = 3000;
const api = require('./routes/index');
const {connect} = require("mongoose");

app.use(express.json());
app.use('/', api);

const start = async () => {
    try {
        await connect("mongodb://0.0.0.0:27017/meals")
            console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();