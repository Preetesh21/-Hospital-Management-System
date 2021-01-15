require('dotenv').config();
const express=require('express');
const app=new express();
const cors=require('cors');
const pool =require('./db');
const bodyParser = require("body-parser");

// Middleware Body Parser    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Setting up a route
app.use('/admin', require('./routes/admin/admin'));

app.use('/user', require('./routes/user/user'));

app.use('/doctor', require('./routes/doctor/doctor'));

app.use('/hospital', require('./routes/hospital/hospital'));

app.use('/patient', require('./routes/patient/patient'));

app.use('/appointments', require('./routes/appointments/appointments'));

app.use('/history', require('./routes/history/history'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on ${PORT} number`));