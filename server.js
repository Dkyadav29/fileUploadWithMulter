const express = require('express')
const dotenv = require("dotenv");
 //const mongoose = require('mongoose')
var bodyParser = require('body-parser')
 

const routes = require('./route/index')
require("./dbConfig/config").connect();
dotenv.config();
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
  
routes(app);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server run')
})

app.listen(process.env.port, () => {
  console.log(` server is running  on port ${process.env.port}`)
})