const express = require('express')
const app = express();
const route = require('./routes/route')

const myEvent = require('./app/Event/events')

app.use((req, res, next)=>{
    req.myEvent = myEvent;
    next();
})


// Read, Eval, Print , Loop

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/v1', route)

app.use((req, res, next)=>{
    next({
        msg: "Server Error",
        status: false
    })
})

app.use((error, req, res, next)=>{
    let status = error.status || 500;
    let msg = error.msg || "Server Error"
    res.status(status).json({
        msg: msg,
        status: false
    })
})


app.listen(3005, 'localhost', (error)=>{
    if(error){
        console.log("Server Error")
    }else{
        console.log("Successfully")
    }
})