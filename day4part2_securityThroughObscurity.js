var fs = require('fs');
var filename = 'day4input.txt'
var file = fs.readFileSync(filename, "utf8");
var input = file.trim().split('\n');
var sectorSum = 0;

for (var i = 0; i < input.length; i++)
{
  var line = input[i].split('[')
  var encryptedName = line[0].slice(0, line[0].length-4).split('');
  var sectorId = parseInt(line[0].slice(line[0].length-3));
  var incrementAlpha = sectorId % 26;
  for (var j = 0; j < encryptedName.length; j++)
  {
    if (encryptedName[j] == '-')
    {
      encryptedName[j] = ' ';
    }
    else
    {
      var k = 0;
      while (k < incrementAlpha)
      {
        var charCode = encryptedName[j].charCodeAt(0);
        encryptedName[j] = String.fromCharCode((charCode-96) % 26 + 97);
        k++;
      }
    }
  }
  if (encryptedName.join('') == "northpole object storage")
  {
  console.log(sectorId);
  }
}
