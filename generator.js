var upper = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var num = '1234567890';
var special = '!@#$%^&*()_+";';

var length = prompt('How many charaters would you like your password to contain?');
var AskSpec = confirm('Click OK to include special charaters.');
var AskNum = confirm('Click OK to include numeric characters.');
var AskLow = confirm('CLick OK to include lowercase charaters.');
var AskUp = confirm('Click OK to include uppercase charaters.');

var generateEL = document.getElementById('generate');
var clipboardEL = document.getElementById('copy');
var resultEL = document.getElementById('result');
