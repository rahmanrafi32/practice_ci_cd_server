const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json("Welcome to test server for ci cd");
})

app.listen(5000, () => {
    console.log(`server is running`);
})