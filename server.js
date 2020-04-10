const express = require('express')
const app = express()
const port = 3000;

let counter = 0;

app.use(express.static(__dirname + '/public'))

app.post('/api/increment', (req, res)=>{
    counter++;
    res.json(counter)
})

app.post('/api/decrement', function(req,res){
    counter--;
    res.json(counter)
})

app.get('/api/count', (req,res) =>{
    res.json(counter);
})

app.post('/api/reset', function(req,res){
    counter = 0
    res.json(counter)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))