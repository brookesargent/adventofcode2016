var md5 = require('md5');
var input = 'uqwqemis';
var password = '--------'.split('');
var position = 0;
var found = 0;
var i = 0;

while (found < 8)
{
  var hash = md5(input+i);
  if (hash.slice(0,5) == '00000')
  {
    position = hash.charAt(5);
    if (position < 7 && position >= 0 && password[position] == '-')
    {
    password[position] = hash.charAt(6);
    found++;
    }
  }
  i++;
}
console.log(password);
