const express = require('express');

require('dotenv').config({path:"../config.env"});
const PORT = process.env.PORT;

// create express instance
const app = express();
app.use(express.json());

app.use("/api",require('./router/router'));
app.listen(PORT, () => {
    console.log('server is running at http://localhost:4000');
})