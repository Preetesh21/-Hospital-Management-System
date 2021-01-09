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
        const {email,password} = (req.body);
        const query=await pool.query('INSERT INTO ADMIN(email,password) VALUES($1,$2) RETURNING *', [(email),(password)],
        (error, results) => {
            if (error) {
                console.log(error);
            }
            console.log("Admin added");
            res.json(results)
          });
    }
    catch(err){
        console.log(err.message);
    }
});

app.get('',async (req,res) =>{
    //console.log(req);
    const {email,password} = (req.body);
    const query= await pool.query('SELECT * FROM ADMIN WHERE email=$1 and password=$2', [(email),(password)], (error, results) => {
    if (error) {
      throw error
    }
    if(results.row){
        console.log("Admin verified");
    }
    else{
        console.log("No such admin exists");
    }
    res.json(results.rows)
  })
})


module.exports = app;