const pool = require("./db");

pool.query(`
select rating as "rating",
	   sum(length)
	   
from film
group by rating
order by rating asc;

`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();