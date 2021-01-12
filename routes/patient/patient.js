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

app.get('/',async (req,res)=>{
    const query=await pool.query('SELECT * FROM PATIENT',(error,results)=>{
        if(error){
            console.log(error.details);
            res.send(error.details);
        }
        else{
            if(results.rows.length>0){
                console.log("Patients shown");
                res.send(results.rows);
            }
            else{
                console.log("No Patients exists");
                res.send(results.rows)
            }
        }
    })
})

app.get('/:id',async (req,res)=>{
    const {id}=req.params;
    const query=await pool.query('SELECT * FROM PATIENT WHERE patient_id=$1',[id],(error,results)=>{
        if(error){
            console.log(error.details);
            res.send(error.details);
        }
        else{
            if(results.rows.length>0){
                console.log("Patient with id shown");
                res.send(results.rows);
            }
            else{
                console.log("No Patients exists with that ID");
                res.send(results.rows)
            }
        }
    })
})

app.post('/',async(req,res)=>{
   try{
    const {name,age,gender,address,disease,contact,type}=(req.body);
    const date=new Date().toLocaleDateString();
    var ans;
    if(type=='Private'){
        const query=await pool.query('select * from hospital where pr=true and available=true',async(error,results)=>{
            if(error){
                console.log(error.details);
                res.send(error.details);
            }
            else{
                console.log("hello",results.rows,(results.rows.length));
                if((results.rows.length)>0){
                    ans= true;
                }
                else{
                    ans= false;
                }
                if(ans){
                    const room_number=results.rows[0].rooms;
                    const query =await pool.query("INSERT INTO PATIENT(name,age,gender,address,disease,contact,arrival_date,room_number) VALUES($1,$2,$3,$4,$5,$6,$7,$8)  RETURNING *",[name,age,gender,address,disease,contact,date,room_number],async(error,results)=>{
                        if(error){
                            console.log(error.details);
                            res.send(error.details);
                        }
                        else{
                            console.log("Added Patient!")
                            res.send(results.rows);
                            const change=false;
                            const query= pool.query("UPDATE HOSPITAL SET available=$1 WHERE rooms=$2",[change,room_number],(error,results)=>{
                                if(error){
                                    throw error
                                }
                                else{
                                    console.log("Updated!!");
                                    //res.send(results.row);
                                }
                        });
                        }
                    })
                }
                else{
                    console.log("No rooms sorry!");
                    res.send("No rooms");
                }
            }
        });
    }
    else{
        console.log("Hell")
        const query=await pool.query('select * from hospital where available=true and pr=false',async(error,results)=>{
            if(error){
                throw error;
            }
            else{
                console.log(results.rows);
                if(results.rows.length>0)
                {
                    ans= true;
                }
                else{
                    ans= false;
                }
                if(ans){
                    const room_number=results.rows[0].rooms;
                    const query =await pool.query("INSERT INTO PATIENT(name,age,gender,address,disease,contact,arrival_date,room_number) VALUES($1,$2,$3,$4,$5,$6,$7,$8)  RETURNING *",[name,age,gender,address,disease,contact,date,room_number],async(error,results)=>{
                        if(error){
                            console.log(error.details);
                            res.send(error.details);
                        }
                        else{
                            console.log("Added Patient!")
                            res.send(results);
                            const change=false;
                            const query= pool.query("UPDATE HOSPITAL SET available=$1 WHERE rooms=$2",[change,room_number],(error,results)=>{
                                if(error){
                                    console.log(error.details);
                                    res.send(error.details);
                                }
                                else{
                                    console.log("Updated!!");
                                    //res.send(results.row);
                                }
                        });
                        }
                    })
                }
                else{
                    console.log("No rooms sorry!");
                    res.send("No rooms");
                }
            }
    });
    }
   }
   catch(err){
       console.log(err.message)
   }
});

app.post("/leave/:id",async(req,res)=>{
    const id=req.params.id;
    const date=new Date().toLocaleDateString();
    const query=pool.query("UPDATE PATIENT SET departure_date=$1 WHERE patient_id=$2",[date,id],async(error,results)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log("Updated Patients details");
            const query=pool.query("SELECT room_number FROM PATIENT WHERE patient_id=$1",[id],async(error,results)=>{
                if(error){
                    console.log('helllo',error.details);
                    res.send(error.details);
                }
                else{
                    const change=true;
                    const room_number=results.rows[0].room_number;
                    console.log(results.rows);
                    const query= pool.query("UPDATE HOSPITAL SET available=$1 WHERE rooms=$2 RETURNING *",[change,room_number],(error,results)=>{
                        if(error){
                            console.log('helo',error.details);
                            res.send(error.details);
                        }
                        else{
                            console.log("Updated!!");
                            res.send(results.rows);
                        }
                })
            }
            })
            
            
        }
    })
})

module.exports=app;