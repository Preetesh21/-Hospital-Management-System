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
    console.log(id);
    const query=await pool.query('SELECT * FROM PATIENT WHERE patient_id=$1',[id],(error,results)=>{
        if(error){
            throw error;
        }
        else{
            console.log(results.rows);
            res.json(results.rows);
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
                throw error;
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
                    const query =await pool.query("INSERT INTO PATIENT(name,age,gender,address,disease,contact,arrival_date) VALUES($1,$2,$3,$4,$5,$6,$7)  RETURNING *",[name,age,gender,address,disease,contact,date],(error,results)=>{
                        if(error){
                            throw error;
                        }
                        else{
                            console.log("Added Patient!")
                            res.json(results.rows);
                        }
                    })
                }
                else{
                    console.log("No rooms sorry!");
                    res.json("No rooms");
                }
            }
        });
    }
    else{
        console.log("Hell")
        const query=await pool.query('select * from hospital where available=true',async(error,results)=>{
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
                    const query =await pool.query("INSERT INTO PATIENT(name,age,gender,address,disease,contact,arrival_date) VALUES($1,$2,$3,$4,$5,$6,$7)  RETURNING *",[name,age,gender,address,disease,contact,date],(error,results)=>{
                        if(error){
                            throw error;
                        }
                        else{
                            console.log(results,"Added Patient!")
                            res.json(results);
                        }
                    })
                }
                else{
                    console.log("No rooms sorry!");
                    res.json("No rooms");
                }
            }
    });
    }
   }
   catch(err){
       console.log(err.message)
   }
});



module.exports=app;