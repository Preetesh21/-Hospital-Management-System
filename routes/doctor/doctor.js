const express=require('express')
const app=new express();
const cors=require('cors');
const pool =require('../../db');
const bodyParser = require("body-parser");

// Middleware Body Parser    
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.post('/',async (req,res)=>{
    try{
        var {name,age,gender,tenure,specialization,available} = (req.body);
        console.log(name,age,gender,tenure,specialization,available);
        specialization=specialization.toUpperCase();
        const query=await pool.query('INSERT INTO DOCTOR(name,age,gender,tenure,specialization,available) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [name,age,gender,tenure,specialization,available],
        (error, results) => {
            if(error){
                console.log(error);
                res.send(error);
            }
            else{
            console.log("Doctor added");
            res.send(results)
            }
          });
    }
    catch(err){
        console.log(err.message);
    }
});


app.post('/update/:id',async (req,res)=>{
    try{
        const {id} = (req.params);
        console.log(req.body);
        const body = req.body.available;
        console.log('ef',body,id);
        const query=await pool.query('UPDATE DOCTOR SET available =($1) WHERE doctor_id=($2) RETURNING *', [body,id],
        (error, results) => {
            if(error){
                console.log(error);
                res.send(error);
            }
            console.log("Doctor updated!");
            res.send(results)
          });
    }
    catch(err){
        console.log(err.message);
    }
});

app.get('/:id',async (req,res) =>{
    
    const {id} = (req.params);
    console.log(id);
    const query= await pool.query('SELECT * FROM DOCTOR where DOCTOR.doctor_id=$1',[id], (error, results) => {
        if(error){
            console.log(error);
            res.send(error);
        }
    if(results.rows.length>0){
        console.log("Doctor shown");
    }
    else{
        console.log("No Doctors at present exists with that id");
    }
    res.send(results.rows)
  })
})

app.get('/find/:key',async(req,res)=>{
    const key=req.params;
    console.log(key);
    key.key=key.key.toUpperCase();
    const query=await pool.query('SELECT * FROM DOCTOR WHERE $1 like doctor.specialization',[key.key],(error,results)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
          if(results.rows.length>0){
              console.log("Doctors shown");
          }
          else{
              console.log("No Doctors at present exists with that specialization");
          }
          res.send(results.rows)
        })
})


app.get('/',async (req,res) =>{
    //console.log(req);
    const query= await pool.query('SELECT * FROM DOCTOR', (error, results) => {
        if(error){
            console.log(error);
            res.send(error);
        }
    if(results.rows.length>0){
        console.log("Doctors shown");
    }
    else{
        console.log("No Doctors at present exists");
    }
    res.send(results.rows)
  })
})

module.exports = app;