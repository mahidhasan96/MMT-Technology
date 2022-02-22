//importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');
const { dirname } = require('path/posix');


//declare startic path

let staticPath = path.join(staticPath, "public");

//intialiazing express.js


const app = express();

//middlewares

app.use(express.static(staticPath));



//routes
//hand route

app.get("/", (req, res) =>{
    res.sendFile(path.join(staticPath, "public", "index.html"));
})

//signup

app.get('/signup', (req, res) =>{
    res.sendFile(path.join(staticPath, "singup.html"))
})

app.listen(3000, () => {
    console.log('listening on port 3000.....');
})