// repl
const event = require('events');
const myEvent = new event();

myEvent.on("RegisterEvent", (data)=>{
    //
    console.log("On Connect data", data)
    //push notice, email

})

module.exports = myEvent;