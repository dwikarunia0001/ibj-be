const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const express = require('express')
const cors=require('cors')
//const m$user=require('./modules/user.module')
//const prisma = require('./helpers/database')
const routes = require('./routes')
const app = express()
const port = 8000

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', async(req, res)=>{
    res.send({
        message:"Hello this is API from Express Tutorial"
    })
})
routes(app)

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
