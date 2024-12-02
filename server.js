const express = require('express')
const baseRoute = require('./src/routes/baseRoute')
require('dotenv').config()

/* 
Welcome,
Let's have some fun
Check out the base route and the base controller where most of
the kungfu happens

Inspired by the MoonLight Architecture
Enjoy😉
*/

const app = express()
const port = process.env.PORT || 4001
app.use(express.json())

app.use('/api', baseRoute)

app.listen(port, () => {
    console.log('server has started successfully on port', port)
})