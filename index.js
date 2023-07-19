const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT,()=>{
    console.group("API Listening on port 4000")
})

app.get('/',(req,res)=>{
    res.send("This is API HomePage")
})
app.get('/about',(req,res)=>{
    res.send("This is API about")
})
app.get('/product',(req,res)=>{
    res.send("This is API product")
})

module.exports = app