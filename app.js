const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
require('dotenv').config();

mongoose.connect(process.env.DB_CONN, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.connection.on('error', () => { console.log("Error connecting to DB")})
mongoose.connection.once('open', () =>{ console.log("Connected to DB!")})

app.use(express.json())

const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

app.listen( port, () => {
    console.log(`App is listening on port ${port}`)
});