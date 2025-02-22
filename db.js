require('dotenv').config()
const Pool=require("pg").Pool;

const pool = new Pool({
    user:process.env.user,
    password: process.env.password,
    host:process.env.host,
    port:5432,
    database: process.env.database,
});

module.exports= pool;