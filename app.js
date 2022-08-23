const express = require("express");
const connectToDB = require("./utils/connectToDB");
require('dotenv').config()

const app = express();
app.use(express.json())

connectToDB(process.env.DB_URL, app);


//names route
const namesRoutes= require('./routes/names.router')
app.use('/names',namesRoutes)

//filterList route
const filtersRoutes= require('./routes/filters.router')
app.use('/filters',filtersRoutes)