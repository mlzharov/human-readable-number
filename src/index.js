module.exports = function toReadable (n) { 
var ones = Array("", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");
var tens = Array("", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety");
var hundreds = Math.floor(n / 100);
n -= hundreds * 100;
var ten = Math.floor(n / 10);
n -= ten * 10 ;

var res = "";
if(hundreds > 0) {
  res += ones[hundreds] + " hundred "
}
if(ten > 1) {
  res += tens[ten] + " "
}
if(ten == 1) {
   n += 10;
   res += ones[n];
}else{
  res += ones[n];
}

return res.trim();
}




