const express= require("express");
const app =new express();
const bodyParser=require('body-parser');
const cors=require('cors');
const pool =require('../../db');

// Middleware Body Parser    
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/',async (req,res)=>{
    const query=await pool.query("SELECT * FROM HOSPITAL",(error,results)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log("Showing the results",results.rows[0]);
            res.send(results.rows);
        }
    })
})

app.post('/:room_number',async(req,res)=>{
    const room_number=req.params.room_number;
    console.log(room_number)
    let query=await pool.query("SELECT available from HOSPITAL WHERE rooms=$1",[room_number],(error,results)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log(results.rows[0]);
            let change;
            if(results.rows[0].available==true)
            {
                change=false;
            }
            else{
                change=true;
            }
            console.log(change);
            query= pool.query("UPDATE HOSPITAL SET available=$1 WHERE rooms=$2",[change,room_number],async(error,results)=>{
                if(error){
                    console.log(error);
                    res.send(error);
                }
                else{
                    console.log("Updated!!");
                    res.send(results.rows);
                }
        });
    }
    });
})

module.exports = app;