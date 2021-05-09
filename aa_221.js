const pool = require("./db");

pool.query(`select * from midterm_list_of_films`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();