var keypad = [[0, 0, 1, 0, 0], [0, 2, 3, 4, 0], [5, 6, 7, 8, 9], [0, 'A', 'B', 'C', 0], [0, 0, 'D', 0, 0]];
var input = ["ULL","RRDDD","LURDL","UUUUD"];
var x = 2;
var y = 0;
var answer = [];

for (var i = 0; i < input.length; i++)
{
  var instructions = input[i];
  for (var j = 0; j < instructions.length; j++)
  {
    console.log(x,y);
    switch (instructions[j])
    {
      case "U":
        if (x > 0 && keypad[x-1][y] !== 0)
        {
          x--
        }
        break;
        
      case "L":
        if (y > 0 && keypad[x][y-1] !== 0)
        {
          y--;
        }
        break;
        
      case "R":
        if (y < 4 && keypad[x][y+1] !== 0)
        {
          y++;
        }
        break;
        
      case "D":
        if (x < 4 && keypad[x+1][y] !== 0)
        {
          x++;
        }
        break;
      }
  }
  answer.push(keypad[x][y]);
}

console.log("The bathroom keycode is " + answer.join('') + ".");