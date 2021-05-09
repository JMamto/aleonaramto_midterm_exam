const pool = require("./db");

pool.query(`call add_customer(1, 'dexter', 'ignacio', 'dignacio@uic.edu.ph', 606)`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();