require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo') //IMPORT DB inportando modulo de dbConnect creado en config
const app = express()

app.use(cors())

const port = process.env.PORT || 3000 //PORT estableciendo puerto de conexion y el default en 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect()