const pool = require("./db");

pool.query(`select * from midterm_total_films_per_category`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();