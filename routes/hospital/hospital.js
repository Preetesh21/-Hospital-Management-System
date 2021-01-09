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
    console.log("hel");
    const query=await pool.query("SELECT * FROM HOSPITAL",(error,results)=>{
        if(error){
            throw error;
        }
        else{
            console.log("Showing the results",results.row[0]);
            res.json(results.row);
        }
    })
})

app.post('/:room_number',async(req,res)=>{
    const room_number=req.params.room_number;
    let query=await pool.query("SELECT available from HOSPITAL WHERE rooms=$1",[room_number],(error,results)=>{
        if(error){
            throw error
        }
        else{
            console.log(results.rows[0].available);
            let change;
            if(results.rows[0].available==true)
            {
                change=false;
            }
            else{
                change=true;
            }
            console.log(change);
            query= pool.query("UPDATE HOSPITAL SET available=$1 WHERE rooms=$2",[change,room_number],(error,results)=>{
                if(error){
                    throw error
                }
                else{
                    console.log("Updated!!");
                    res.json(results.row);
                }
        });
    }
    });
})

module.exports = app;