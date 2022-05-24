require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const {db, dbConnectMySql} = require("./config/mysql")

app.use(cors())


dbConnectMySql()