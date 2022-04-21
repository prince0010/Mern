//app.js
//This is because when we try to call our back-end API from the front-end pat, this will produce an error saying “Request… 404 error
//to solve this (read the next line)
//calling backend API from fron-end pat which it needs to install cors in our back-end (server-side) project
// @explanation rani go to terminal -> gitbash -> cd root folder which is mern-student since naa dira ang frontend pat na gamiton para tawagon saback end api npm install cors
//FINAL STEPS INSTALLING CORSE (go to terminal -> gitbash -> cd mern-student -> npm install cors 
//after installation sa cors update the app.js that is located in mern-student folder 
//app.js(mern-student folder) -> (the back end’s entry point - this is located inside mern-student folder) 
const express = require('express');
const connectDB = require('./config/db');
const db = require('./config/db');
var cors = require('cors');
const app = express();

//routes para sa katong naas student na js na ginatawag ang students para tos route nila 
// sa pag connect sa routes/api/students
//routes
const students = require('./routes/api/student');
//connecting to the DB which is nag base sa db.js na pwede magamit ang function tungod kay gi connect.exports sya then 
//ang default.json naa didto ang connection sa mongo db og ang functions sa connection kay naas db.js
//Connect sa Database
connectDB();
app.get('/', (req, res)=> res.send('Hello MERN!'));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}` ));

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use routes
app.use('/api/students', students);
