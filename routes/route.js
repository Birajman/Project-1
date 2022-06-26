const express = require('express')
const app = express();
const user_route = require('./user_route')
const auth_route = require('./auth_route')

app.get('/', (req, res)=>{
    res.json({
        result: {
            author: "Birajman",
            version: "1.0.0.12",
            country: "Nepal"
        },
        msg: "Website-Content",
        status: true
    })
})
app.use('/user',user_route)
app.use(auth_route)

module.exports = app