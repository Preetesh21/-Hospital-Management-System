const Pool=require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password: "prashasti",
    host:"localhost",
    port:5432,
    database: "hms",
});

module.exports= pool;