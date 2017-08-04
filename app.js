var express = require('express');
var app = express();

var randomNumber = require('./randomNumber.js');
var convertToDollars = require('./convertToDollars.js');
var moduleThree = require('./moduleThree.js');
var body = require('body-parser')

var port = 3000;


app.use(express.static('public'));

var text = moduleThree.textFunction;
var randomMoney = moduleThree.randomMoneyFunction

var money = {
    amount: randomMoney(100, 1000000), 
    things: text()
    };

console.log(money);


app.get('/modulMadness', function (req, res) {
    res.send(money);
});

app.listen(port, function () {
    console.log('listening on port:', port)
});

