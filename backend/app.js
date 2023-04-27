// import ENVIRONMENT VARIABLES
require('dotenv').config()
const host = process.env.HOST
const port = process.env.PORT
// Server Create 
const express = require('express')
const app = express()
app.use(express.json())                        // express vou trafegar com JSON
app.listen(port)
console.log(`**** RODANDO app.js em ${host}:${port} ****`)
// DB Connection
const connectDB = require('./dataBase/connectDB')
connectDB() 
app.route('/').get((req, res) => {
    res.send("Ola teste ok 1")
})
// Routes
const routes = require('./routes/router')
app.use('/api', routes)