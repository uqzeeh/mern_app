const express = require('express');
const connect = require('./database/connection');
require('dotenv').config({path:"../config.env"});
const PORT = process.env.PORT;

// create express instance
const app = express();
app.use(express.json());

// database connection
connect();

app.use("/api",require('./router/router'));
app.listen(PORT, () => {
    console.log('server is running at http://localhost:4000');
})