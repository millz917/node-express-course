/*
    Server.Js
    This file creates a server.
*/


// Declare variables
const express = require('express');
const app = express();

// Set up data
const mockUserData = [
    { name : 'Mark' },
    { name : 'Jill' }
]

// Set up api end point
app.get('/users', function(req, res){
    res.json({
        success : true,
        message : 'successfully got users. Nice!',
        users : mockUserData
    })
})

// Start server
app.listen(8000, function(){
    console.log("server is running");
})