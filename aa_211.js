const pool = require("./db");

pool.query(`
select count(*) 
from film;

`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();