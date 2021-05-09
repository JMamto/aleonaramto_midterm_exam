const pool = require("./db");

pool.query(`
select category.name as "category name",
	   round(avg(film.rental_rate),2) as "average rental rate"
	   
from category
join film_category
on film_category.category_id = category.category_id
join film
on film.film_id = film_category.film_id
group by 1
order by 2 desc


`, (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();