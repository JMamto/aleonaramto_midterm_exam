const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
//landing page
app.get('/', async(req, res) =>{
    res.send('Welcome to the server');
});

app.get('/amtoaleonar-211', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        //const data = req.body;

        //const queryText = ;
        //const dataQuery = ;

        const query = await pool.query(`
        select count(*) 
	    from film;
        
        `);
        res.json(query.rows);

    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});

app.get('/amtoaleonar-212', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        //const data = req.body;

        //const queryText = ;
        //const dataQuery = ;

        const query = await pool.query(`
        select rating as "rating",
	    sum(length)
	   
        from film
        group by rating
        order by rating asc;
        
        `);
        res.json(query.rows);

    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});

app.get('/amtoaleonar-213', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        //const data = req.body;

        //const queryText = ;
        //const dataQuery = ;

        const query = await pool.query(`
        
        
        select film_id,
	    title
	   
        from film
        group by film_id
        having replacement_cost = (select max(replacement_cost) from film)
        order by 1 asc
        limit 15;
        
        
        `);
        res.json(query.rows);

    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});

app.get('/amtoaleonar-221', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        //const data = req.body;

        //const queryText = ;
        //const dataQuery = ;

        const query = await pool.query(`select * from midterm_list_of_films`);
        res.json(query.rows);

    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});

app.get('/amtoaleonar-222', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        //const data = req.body;

        //const queryText = ;
        //const dataQuery = ;

        const query = await pool.query(`select * from midterm_total_films_per_category`);
        res.json(query.rows);

    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});


app.get('/amtoaleonar-231', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        //const data = req.body;

        //const queryText = ;
        //const dataQuery = ;

        const query = await pool.query(`
        
        select category.name as "category name",
	    round(avg(film.rental_rate),2) as "average rental rate"
	   
        from category
        join film_category
        on film_category.category_id = category.category_id
        join film
        on film.film_id = film_category.film_id
        group by 1
        order by 2 desc
        
        
        
        `);
        res.json(query.rows);

    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});

app.get('/amtoaleonar-232', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        //const data = req.body;

        //const queryText = ;
        //const dataQuery = ;

        const query = await pool.query(`
        
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
        
    
        
        `);
        res.json(query.rows);

    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});

app.post('/amtoaleonar-241', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        const data = req.body;

        const queryText = `select * from find_name($1, $2)`;
        const dataQuery = [data.cnamef, data.cnamel];

        const query = await pool.query(queryText, dataQuery);
        res.json(query.rows);

    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});

app.post('/amtoaleonar-242', async(req, res) =>{

    try{
        //>if requires a parameter
        //const {id} = req.params;

        //>if requires data from body
        const data = req.body;

        const queryText = `call add_customer($1, $2, $3, $4, $5)`;
        const dataQuery = [data.storeid, data.fname, data.lname, data.cemail, data.caddress];

        const query = await pool.query(queryText, dataQuery);
        //res.json(query.rows);
        res.send('Customer added successfully')
    }catch(error){
        console.error(error.message);
        res.send('An error has occured')
    }

});

app.listen(5000, () =>{
    console.log('server has stated on port 5000')
});