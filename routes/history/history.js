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
            console.log(error);
            res.send(error);
        }
        else{
            console.log(results.rows);
            res.send(results.rows);
        }
    })
})

app.get('/:id&:doctor_id&:date&:hr',async (req,res)=>{
    const {id,doctor_id,date,hr}=req.params;
    console.log(id,doctor_id,date,hr);
    const query=await pool.query('SELECT * FROM LEAFLET_HISTORY WHERE patient_id=$1 AND date=$2 AND hr=$3 AND doctor_id=$4',[id,date,hr,doctor_id],(error,results)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log(results.rows);
            res.send(results.rows);
        }
    })
})

app.get('/patient/:id',async(req,res)=>{
    const {id}=req.params;
    const query=pool.query("SELECT * FROM LEAFLET_HISTORY WHERE patient_id=$1",[id],(error,results)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log(results.rows);
            res.send(results.rows);
        }
    })
})

app.post("/:id",async(req,res)=>{
    const {id}=req.params;
    const {patient_id,disease,cure,room_number,date,hr}=req.body;
    console.log(patient_id,disease,cure,room_number,date,hr,id);
    const query=await pool.query('SELECT arrival_date from PATIENT where patient_id =$1',[patient_id],async(error,results)=>{
        if(error){
            console.log(error.detail)
            res.send(error.detail);
        }
        else{
            console.log(results.rows);
            const arrival_date=results.rows[0].arrival_date;
            console.log(arrival_date,results.rows);
            const query=await pool.query('INSERT INTO LEAFLET_HISTORY(patient_id,date,hr,doctor_id,disease,cure,room_number,arrival_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[patient_id,date,hr,id,disease,cure,room_number,arrival_date],(error,results)=>{
                if(error){
                    console.log(error.detail)
                    res.send(error.detail);
                }
                else{
                    console.log(results.rows);
                    res.send(results.rows);
                }
            })
        }
    })
})

module.exports=app;