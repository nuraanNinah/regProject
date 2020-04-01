let regex = new RegExp( "I will", "ig")

let regex1 = /will/i

let regString = " I will I will I will";

console.log(regex.test(regString));

while(regex1.test(regString)){
    count++;
}

//should return true or false
var txt = 'This is a test of regular expressions.';
var regex = /test/;
var results = regex.test(txt);
console.log(results);