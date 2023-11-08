const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require("cors");
const bodyParser = require("body-parser");

const pool = new Pool({
  user: 'keycloak_user',
  host: 'localhost',
  database: 'keycloak',
  password: 'keycloak123',
  port: 5432, 
});

var corsOptions = {
  origin: "http://localhost:4200" 
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


pool.connect();
app.get('/api/userdata',(req,res)=>{
  console.log('node requrst',req)
  pool.query('SELECT * FROM user_entity', (err, result) => {
    if (err) {
      //console.error(err);
      res.status(500).json({ message: 'Error fetching data from the database' });
    } else {
      res.json(result.rows);
    }
  });
})

app.get('/api/userdataByUser',(req,res)=>{
  debugger;
  const username = req.query.username;
  //console.log('email from js',userEmail);
  const query = {
    text: 'SELECT * FROM user_entity WHERE username = $1',
    values: [username],
  };
  console.log('Request query:', req.query);
  pool.query(query, (error, result) => {
    if (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Error fetching data from the database' });
    } else {
      res.json(result.rows); 
    }
  });
});






app.post('/api/userdata',(req,res)=>{
  const { first_name, last_name, email, phone, dob, gender, password, confpassword } = req.body;
  pool.query('INSERT INTO user_db (first_name, last_name, email, phone, dob, gender, password, confirm_password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
  [first_name, last_name, email, phone, dob, gender, password, confpassword],
  (error, result) => {
    console.log('node result-',result)
    if (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Error inserting data into the database' });
    } else {
      res.status(201).json({ message: 'Data inserted successfully' });
    }
  }
  );
})


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.put('/api/userdata/:email', (req, res) => {
  const userEmail = req.params.email; 
  const { first_name, last_name, email, phone, dob, gender, password, confpassword } = req.body;

  const query = {
    text: `UPDATE user_db
           SET first_name = $1, last_name = $2, email = $3, phone = $4, dob = $5, gender = $6, password = $7, confirm_password = $8
           WHERE email = $9`, 
    values: [first_name, last_name, email, phone, dob, gender, password, confpassword, userEmail],
  };

  pool.query(query, (error, result) => {
    if (error) {
      console.error('Error updating user data:', error);
      res.status(500).json({ message: 'Error updating user data in the database' });
    } else {
      res.status(200).json({ message: 'User data updated successfully' });
    }
  });
});



