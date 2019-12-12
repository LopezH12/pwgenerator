var upper = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var num = '1234567890';
var special = '!@#$%^&*()_+";';
var generateEL = document.getElementById('generate');
var clipboardEL = document.getElementById('copy');
var resultEL = document.getElementById('result');

var length = prompt('How many charaters would you like your password to contain?');
if(length === 8 || length === 128){
    alert()
}
else if(length < 8){
    alert('Password must be more than 8 characters long.')
}
else if(length > 128){
    alert('Password must be less than 128 characters long.')
}



var AskSpec = confirm('Click OK to include special charaters.');
var AskNum = confirm('Click OK to include numeric characters.');
var AskLow = confirm('CLick OK to include lowercase charaters.');
var AskUp = confirm('Click OK to include uppercase charaters.');