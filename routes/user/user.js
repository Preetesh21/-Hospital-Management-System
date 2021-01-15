const express=require('express')
const app=new express();
const cors=require('cors');
const pool =require('../../db');

// Middleware Body Parser    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.post('/add',async (req,res)=>{
    try{
        
        const {name,email,password} = (req.body);
        const query=await pool.query('INSERT INTO USERS(name,email,password) VALUES($1,$2,$3) RETURNING *', [(name),(email),(password)],
        (error, results) => {
            if (error) {
                console.log(error);
            }
            console.log("User added");
            res.send(results)
          });
    }
    catch(err){
        console.log(err.message);
    }
});

app.post('/',async (req,res) =>{
    //console.log(req);
    const {email,password} = (req.body);
    const query= await pool.query('SELECT * FROM USERS WHERE email=$1 and password=$2', [(email),(password)], (error, results) => {
    if (error) {
      throw error
    }
    if(results.rows.length>0){
        console.log("User verified");
    }
    else{
        console.log("No such user exists");
    }
    res.send(results.rows)
  })
})

app.get('/all',async (req,res) =>{
    
    const query= await pool.query('SELECT * FROM USERS', (error, results) => {
    if (error) {
      throw error
    }
    if(results.rows.length>0){
        console.log("Users shown");
    }
    else{
        console.log("No user exists");
    }
    res.send(results.rows)
  })
})


module.exports = app;