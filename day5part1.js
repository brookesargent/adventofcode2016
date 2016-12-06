var md5 = require('md5');
var input = "uqwqemis";
var fiveZeroes = [];
var password = "";
var found = 0;
var i = 0;

while (found < 8)
{
  if (md5(input + i).slice(0,5) == "00000")
  {
    fiveZeroes.push(md5(input+i));
    password = password + md5(input+i).charAt(5);
    i++;
    found++;
  }
  else
  {
    i++;
  }
}
console.log(password);
