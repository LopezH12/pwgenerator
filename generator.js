var upper = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var num = '1234567890';
var special = '!@#$%^&*()_+";';
var empty;
var ifOne = false;
var validLength = false;
var generateEL = document.getElementById('generate');
var clipboardEL = document.getElementById('copy');
var resultEL = document.getElementById('result');

function password(){
var length = prompt('How many charaters would you like your password to contain?');
while(!validLength){
    if(length < 8 || length > 128){
        length = prompt("");
        alert('Password needs to ')
    }
    else{
        validLength = true;
    }
    }
  
var AskSpec = confirm('Click OK to include special charaters.');
var AskNum = confirm('Click OK to include numeric characters.');
var AskLow = confirm('CLick OK to include lowercase charaters.');
var AskUp = confirm('Click OK to include uppercase charaters.');

if(AskSpec === true || AskNum === true || AskLow === true || AskUp === true) {
    ifOne = true; 
}
while(!ifOne){
    alert('Pick at least one.');
    var AskSpec = confirm('Click OK to include special charaters.');
    var AskNum = confirm('Click OK to include numeric characters.');
    var AskLow = confirm('CLick OK to include lowercase charaters.');
    var AskUp = confirm('Click OK to include uppercase charaters.');
    if(AskSpec === true || AskNum === true || AskLow === true || AskUp === true) {
        ifOne = true; 
    }

}

if(AskSpec === true && AskNum === true && AskLow === true && AskUp === true) {
    var allTrue = ['upper',  'lower', 'num', 'special'];
    for(var l = 0; l < length; l++){
        var any = allTrue[Math.floor(Math.random() * 4)];
        if(any === 'upper'){
            empty += upper.charAt(Math.floor(Math.random() * 26));
        }
        else if(any === 'lower'){
            empty += lower.charAt(Math.floor(Math.random() * 26));
        }
        else if(any === 'num'){
            empty += num.charAt(Math.floor(Math.random() * 9));
        }
        else{
            empty += special.charAt(Math.floor(Math.random() * 13));
        }


    }
  
}
 
else if(AskSpec === true && AskNum === true && AskLow === true && AskUp === false) {
    var threeTrue = ['lower', 'num', 'special'];
    for(var l = 0; l < length; l++){
        var any = threeTrue[Math.floor(Math.random() * 3)];
        if(any === 'special'){
            empty += special.charAt(Math.floor(Math.random() * 13));
        }
        else if(any === 'lower'){
            empty += lower.charAt(Math.floor(Math.random() * 26));
        }
        else{
            empty += num.charAt(Math.floor(Math.random() * 9));
        }
    }
}

else if(AskSpec === true && AskNum === true && AskLow === false && AskUp === false) {
    var twoTrue = ['num', 'special'];
    for(var l = 0; l < length; l++){
        var any = twoTrue[Math.floor(Math.random() * 2)];
        if(any === 'special'){
            empty += special.charAt(Math.floor(Math.random() * 13));
        }
        else{
            empty += num.charAt(Math.floor(Math.random() * 9));
        }
    }
}

else if(AskSpec === true && AskNum === false && AskLow === false && AskUp === false) {
    for(var l = 0; l < length; l++){
            empty += special.charAt(Math.floor(Math.random() * 13));
    }   
}

else if(AskSpec === false && AskNum === true && AskLow === false && AskUp === false) {
    for(var l = 0; l < length; l++){
        empty += num.charAt(Math.floor(Math.random() * 9));  
    }     
}

else if(AskSpec === false && AskNum === false && AskLow === true && AskUp === false) {
    for(var l = 0; l < length; l++){
           empty += lower.charAt(Math.floor(Math.random() * 26)); 
    }      
}

else {
    for(var l = 0; l < length; l++){
           empty += upper.charAt(Math.floor(Math.random() * 26));       
    }
}
console.log(empty);
resultEL = empty;
}

var generate = document.getElementById("generate").addEventListener("click", password);
