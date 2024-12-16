var express = require("express")
var bodyParser = require("body-parser")
var app = express()


app.set('view engine', 'pug')
app.set('views', './me')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.render('form');
})

app.post('/submit',function(req,res){
    console.log(res.body);
    
    res.send("Data Received!!")
})

app.listen(3000)