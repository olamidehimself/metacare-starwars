require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`connected on port ${port}`));