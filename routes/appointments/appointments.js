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
    const query=await pool.query('SELECT * FROM APPOINTMENTS',(error,results)=>{
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

app.get('/:id&:date&:hr',async (req,res)=>{
    const {id,date,hr}=req.params;
    console.log(id,date,hr);
    console.log(req.params);
    const query=await pool.query('SELECT * FROM APPOINTMENTS WHERE patient_id=$1 AND date=$2 AND hr=$3',[id,date,hr],(error,results)=>{
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

app.get('/:id',async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    const query=await pool.query('SELECT * FROM APPOINTMENTS WHERE patient_id=$1',[id],(error,results)=>{
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

app.get('/doctor/:id',async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    const query=await pool.query('SELECT * FROM APPOINTMENTS WHERE doctor_id=$1',[id],(error,results)=>{
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


app.post('/:id',async (req,res)=>{
    const {id}=req.params;
    const{doctor_id,date,hr}=(req.body);
    const query=await pool.query('SELECT * FROM APPOINTMENTS WHERE doctor_id=$1 AND date=$2 AND hr=$3',[doctor_id,date,hr],async (error,results)=>{
        try{
        if(error){     
            res.send(error);
            console.log(error);
        }
        else{
            if(results.rows.length==0){
                const query=await pool.query('select name from doctor where doctor_id=$1',[doctor_id],async(error,results)=>{
                        if(error){
                            console.log(error);
                            res.json(error);
                        }
                        else{
                            const doc_name=results.rows[0].name;
                            console.log(doc_name,results.rows)
                            const query=await pool.query('select name from patient where patient_id=$1',[id],async(error,results)=>{
                                    if(error){
                                        console.log(error);
                                        res.json(error);
                                    }
                                    else{
                                        const pat_name=results.rows[0].name;
                                        console.log(pat_name,results.rows)
                                        const query=await pool.query('INSERT INTO APPOINTMENTS(patient_id,doctor_id,date,hr,doctor_name,patient_name) VALUES($1,$2,$3,$4,$5,$6) RETURNING *',[id,doctor_id,date,hr,doc_name,pat_name],async(error,results)=>{
                                            if(error){
                                                res.send(error);
                                                console.log(error);
                                            }
                                            else{
                                                console.log("Appointment Fixed!!");
                                                res.send(results.rows[0]);
                                            }
                                        });
                                    }
                                
                            });
                        }
                    
                });
            }
            else{
                console.log("Doctor Ain't Free!!!");
                res.send("Not Possible!");
            }
        }
    }
        catch(err){
            console.log(err.message);
        }
    })

})

module.exports=app;