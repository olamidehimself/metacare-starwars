require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.set()

app.use('/api/movies', require('./routes/movies'));
app.use('/api/characters', require('./routes/characters'));

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`connected on port ${port}`));