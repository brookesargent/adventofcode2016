var fs = require('fs');
var filename = 'day3input.txt'
var file = fs.readFileSync(filename, "utf8");
var input = file.trim().split('\n');
var line;
var trimInput = [];
var transposed = [];

for (var i = 0; i < input.length; i++)
{
  line = input[i].trim().split('  ');
  for (var j = 0; j < line.length; j++)
  {
    if (line[j] == '')
    {
      line.splice(j, 1);
    }
  }
  trimInput.push(line);
}

function transpose(input) {
  for (var j = 0; j < trimInput.length; j+=3)
  { 
   for (var k = 0; k < 3; k += 1) 
   {
      transposed.push([trimInput[j+0][k], trimInput[j+1][k], trimInput[j+2][k]])
    }
  }  
  trimInput = transposed;
}
function countTriangles(input) {
var validTriangles = 0;
  for (var l = 0; l < trimInput.length; l++)
  {
      var currentTriangle = trimInput[l];
      var a = parseInt(currentTriangle[0]);
      var b = parseInt(currentTriangle[1]);
      var c = parseInt(currentTriangle[2]);
      if (a < b + c && b < a + c && c < a + b)
      {
        validTriangles++;
      }
  }
console.log(validTriangles + " of the triangles are possible.");
}

//prints part one answer
countTriangles(trimInput);
transpose(trimInput);
//prints part two answer
countTriangles(trimInput);

