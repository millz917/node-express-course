/*
    Server.Js
    This file creates a server.
*/


// Declare variables
const express = require('express');
const app = express();

// Start server
app.listen(8000, function(){
    console.log("server is running");
})