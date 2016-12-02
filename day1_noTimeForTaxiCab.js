var fs = require('fs');
var filename = 'day1input.txt'
var file = fs.readFileSync(filename, "utf8");
var arr = file.split(', ');

function findEasterBunny(arr) {
var currentDirection = "N";
var xCoordinate = 0;
var yCoordinate = 0;
var visitedTwice;
var currentCoordinate = "0,0";
var coordinatePath = ["0,0"];

for (var i = 0; i < arr.length; i++)
{
   var steps = parseInt(arr[i].substr(1));
   switch (currentDirection)
   {
     case "N":
       for (var j = 0; j < steps; j++)
       {
       if (arr[i].charAt(0) == "L")
       {
         xCoordinate--;
         currentDirection = "W";
       }
       else
       {
         xCoordinate++;
         currentDirection = "E";
       }
       currentCoordinate = xCoordinate + "," + yCoordinate;
       if (coordinatePath.indexOf(currentCoordinate) == -1)
       {
       coordinatePath.push(currentCoordinate);
       }
       else if (coordinatePath.indexOf(currentCoordinate) && !visitedTwice)
       {
        visitedTwice = coordinatePath[coordinatePath.indexOf(currentCoordinate)];
       }
       }
      break;
      
      case "W":
       for (j = 0; j < steps; j++)
       {
       if (arr[i].charAt(0) == "L")
       {
         yCoordinate--;
         currentDirection = "S";
       }
       else
       {
         yCoordinate++;
         currentDirection = "N";
       }
       currentCoordinate = xCoordinate + "," + yCoordinate;
       if (coordinatePath.indexOf(currentCoordinate) == -1)
       {
       coordinatePath.push(currentCoordinate);
       }
       else if (coordinatePath.indexOf(currentCoordinate) && !visitedTwice)
       {
        visitedTwice = coordinatePath[coordinatePath.indexOf(currentCoordinate)];
       }
       }
      break;
        
      case "S":
       for (j = 0; j < steps; j++)
       {
       if (arr[i].charAt(0) == "L")
       {
         xCoordinate++;
         currentDirection = "E";
       }
       else
       {
         xCoordinate--;
         currentDirection = "W";
       }
       currentCoordinate = xCoordinate + "," + yCoordinate;
       if (coordinatePath.indexOf(currentCoordinate) == -1)
       {
       coordinatePath.push(currentCoordinate);
       }
       else if (coordinatePath.indexOf(currentCoordinate) && !visitedTwice)
       {
        visitedTwice = coordinatePath[coordinatePath.indexOf(currentCoordinate)];
       }
       }
      break;
        
      case "E":
       for (j = 0; j < steps; j++)
       {
       if (arr[i].charAt(0) == "L")
       {
         yCoordinate++;
         currentDirection = "N";
       }
       else
       {
         yCoordinate--;
         currentDirection = "S";
       }
       currentCoordinate = xCoordinate + "," + yCoordinate;
       if (coordinatePath.indexOf(currentCoordinate) == -1)
       {
       coordinatePath.push(currentCoordinate);
       }
       else if (coordinatePath.indexOf(currentCoordinate) && !visitedTwice)
       {
        visitedTwice = coordinatePath[coordinatePath.indexOf(currentCoordinate)];
       }
       }
      break;
   }
}
var answer1 = Math.abs(0 - yCoordinate) + Math.abs(0 - xCoordinate);
var answer2 = Math.abs(0-visitedTwice.split(',')[1]) + Math.abs(0-visitedTwice.split(',')[0]);
console.log("The Easter Bunny HQ is " + parseInt(answer1) + " blocks away.");
console.log("The location visited twice is " + answer2 + " blocks away.");
}

findEasterBunny(arr);