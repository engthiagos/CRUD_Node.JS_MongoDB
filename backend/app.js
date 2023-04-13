// Server Create 
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());                        // express vou trafegar com JSON
app.listen(3000);
console.log('**** RODANDO app.js ****');
/* SETUP
set up nodemoon -> packag.json -> scpripts -> "start": "nodemon app.js"
to start nodemon -> npm start
Database:   https://www.mongodb.com/atlas/database
            Username: PARTYTIME
            Password: JreBTzlLvvQDDhE5
            IP: 152.249.142.46/32
*/
// DB Connection
const connectDB = require('./db/connectDB');
connectDB();
// Routes
const routes = require('./routes/router');
app.use('/api', routes);