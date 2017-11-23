var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('dist'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
})
// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname + "/about.html"));
// })
app.listen(9000);
console.log(__dirname);