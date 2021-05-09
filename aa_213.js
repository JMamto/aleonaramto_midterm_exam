const pool = require("./db");

pool.query(`
select film_id,
	   title
	   
from film
group by film_id
having replacement_cost = (select max(replacement_cost) from film)
order by 1 asc
limit 15;

`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();