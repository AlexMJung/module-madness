var randomNumber = require('./randomNumber.js');
var convertToDollars = require('./convertToDollars.js');

function randoMoney(x , y){
    var z = randomNumber(x,y);
    return convertToDollars(z);
    
}

function text (){
    return "Account balance: \n"
}

module.exports = {
    textFunction : text,    
    randomMoneyFunction :randoMoney
}
