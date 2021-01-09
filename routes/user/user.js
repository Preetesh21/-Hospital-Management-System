const express=require('express')
const app=new express();
const cors=require('cors');
const pool =require('../../db');

// Middleware Body Parser    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.post('/',async (req,res)=>{
    try{
        
        const {email,password} = (req.query);
        const query=await pool.query('INSERT INTO USERS(email,password) VALUES($1,$2) RETURNING *', [(email),(password)],
        (error, results) => {
            if (error) {
                console.log(error);
            }
            console.log("User added");
            res.json(results)
          });
    }
    catch(err){
        console.log(err.message);
    }
});

app.get('',async (req,res) =>{
    //console.log(req);
    const {email,password} = (req.query);
    const query= await pool.query('SELECT * FROM USERS WHERE email=$1 and password=$2', [(email),(password)], (error, results) => {
    if (error) {
      throw error
    }
    if(results.row){
        console.log("User verified");
    }
    else{
        console.log("No such user exists");
    }
    res.json(results.rows)
  })
})


module.exports = app;