const express=require('express')
const app=new express();
const cors=require('cors');
const pool =require('./db');

// Middleware Body Parser    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/hospital',async (req,res) =>{
    try{
        const query=await pool.query("SELECT * FROM HOSPITAL;");
        res.json(query.rows);
    }
    catch(err){
        console.err(err.message);
    }
})

// Setting up a route
app.use('/admin', require('./routes/admin/admin'));

app.use('/user', require('./routes/user/user'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT} number`));