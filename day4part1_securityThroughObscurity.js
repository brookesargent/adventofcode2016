var fs = require('fs');
var filename = 'day4input.txt'
var file = fs.readFileSync(filename, "utf8");
var input = file.trim().split('\n');
var sectorSum = 0;

for (var i = 0; i < input.length; i++)
{
  var letterCounter = [];
  var line = input[i].split('[')
  var encryptedName = line[0].slice(0, line[0].length-4);
  var sectorId = parseInt(line[0].slice(line[0].length-3));
  var checksum = line[1].slice(0, line[1].length-1);
  var sortedName = encryptedName.split('').sort()
  for (var j = 0; j < sortedName.length; j++)
  {
    if (sortedName[j] != sortedName[j-1])
    {
    letterCounter.push([sortedName[j], 1])
    }
    else
    {
    letterCounter[letterCounter.length-1][1]++;
    }
  }
  letterCounter.shift();
  letterCounter.sort(function(a, b) {
    if (a[1] === b[1]) {
      if (a[0] != b[0]) {
        return (a[0] < b[0] ? -1 : 1);
      }
      else{
        return 0;
      }
    }
    else {
        return (a[1] < b[1]) ? 1 : -1;
    }
  });
  if (letterCounter[0][0]+letterCounter[1][0]+letterCounter[2][0]
  +letterCounter[3][0]+letterCounter[4][0] == checksum)
  {
    sectorSum += sectorId;
  }
}
console.log(sectorSum);
