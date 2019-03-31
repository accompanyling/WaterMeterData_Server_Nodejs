var path=require('path')
var express = require('express');
var app = express();
// console.log(__dirname+'public');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
   res.send('Hello GET');
  //  console.log("主页 GET请求");
})
 
app.post('/',function(req,res){
    console.log("主页 POST请求");
    res.send("Hello post")
})
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

