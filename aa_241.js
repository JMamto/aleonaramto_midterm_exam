const pool = require("./db");

pool.query(`select * from find_name('dexter', 'ignacio')`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();