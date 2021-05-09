const pool = require("./db");

pool.query(`

select city,
       count(ren.rental_id) as "total rental",
	   sum(pay.amount) as "total sales"
from city
join address
using(city_id)

join customer cus
using(address_id)
join rental ren
using(customer_id)
join payment pay
using(customer_id)
group by 1
order by 1

`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();