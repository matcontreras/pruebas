const express = require('express');
const server = express();
const colors = require('colors');


server.get('/', function(req, res){
    res.send('<h1>hollla</h1>');
    res.end();
})

server.listen(3000, function(){
    console.log('server 300'.red);
})










/*
const http = require('http');

const colors = require('colors');

const handleServer = function (req, res) {
    res.writeHead(200, {"Content-type" : "text/html"});
    res.write('<h1>sHola CHe</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('server mostrado 3000'.underline.red);
});
*/





/*fs.readFile('./teto.txt', function (err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});*/

//console.log('ultima fila del archivo');



//console.log(os.homedir());
//console.log('Memoria total ' + os.totalmem() + ' bytes');