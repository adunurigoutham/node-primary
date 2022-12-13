var express = require('express')
var hbs = require('hbs')
var app = express()

app.set('view engine', 'hbs')

app.set('views', __dirname+"/views")

app.get('/', (req, res)=>{
    res.render('demo')
})

var demo = {
    name : 'Rohan',
    age : 28
}
  
app.get('/data', (req, res)=>{
     res.render('dynamic', {demo : demo})
})

var projects = {
    name : 'Rahul', 
    skills : ['Data Mining', 'BlockChain Dev', 'node.js']
}
  
app.get('/projects', (req, res)=>{
    res.render('projects', {projects : projects});
})
  
app.listen(3000, () => {
    console.log("Started the server");
})