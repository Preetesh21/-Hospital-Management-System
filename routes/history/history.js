const express=require('express');
const app = new express();
const pool=require('../../db');
const cors=require('cors');
const bodyParser = require("body-parser");

// Middleware Body Parser    
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/',async (req,res)=>{
    const query=await pool.query('SELECT * FROM LEAFLET_HISTORY',(error,results)=>{
        if(error){
            throw error;
        }
        else{
            console.log(results.rows);
            res.json(results.rows);
        }
    })
})

app.get('/:id',async (req,res)=>{
    const {id}=req.params;
    const {doctor_id,date,hr}=req.body;
    console.log(id);
    const query=await pool.query('SELECT * FROM LEAFLET_HISTORY WHERE patient_id=$1 AND date=$2 AND hr=$3 AND doctor_id=$4',[id,date,hr,doctor_id],(error,results)=>{
        if(error){
            throw error;
        }
        else{
            console.log(results.rows);
            res.json(results.rows);
        }
    })
})

app.post("/:id",async(req,res)=>{
    const {id}=req.params;
    const {patient_id,disease,cure,room_number,date,hr,arrival_date}=req.body;
    console.log(patient_id,disease,cure,room_number,date,hr,arrival_date,id);
    const query=await pool.query('INSERT INTO LEAFLET_HISTORY(patient_id,date,hr,doctor_id,disease,cure,room_number,arrival_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[patient_id,date,hr,id,disease,cure,room_number,arrival_date],(error,results)=>{
        if(error){
            console.log(error.detail)
            res.json(error.detail);
            throw error;
        }
        else{
            console.log(results.rows);
            res.json(results.rows);
        }
    })
})

module.exports=app;