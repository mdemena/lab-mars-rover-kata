// Rover Object Goes Here
// ======================

const rover1 = {
    direction : "N",
    x : 0,
    y : 0,
    travelLog:[{x : 0, y : 0}]
}

const rover2 = {
    direction : "N",
    x : 2,
    y : 2,
    travelLog:[{x : 2, y : 2}]
}
  
const obstacles = [{x : 3, y : 4}, {x : 5, y : 4}, {x : 7, y : 1}];
const roversOnGrid = [rover1, rover2];
  
// ======================
function hasObstaclesOrRovers(x,y){
    let result = "";
    for(let o = 0; o < obstacles.length; o++){
        if (obstacles[o].x===x && obstacles[o].y===y){
        result = "Obstacle";
        break;
        }
    }
    for(let r = 0; r < roversOnGrid.length; r++){
        if (roversOnGrid[r].x===x && roversOnGrid[r].y===y){
        result = "Rover";
        break;
        }
    }

    return result;
}
  
function turnLeft(rover){
    switch(rover.direction){
        case "N":
        rover.direction = "W";
        break;
        case "W":
        rover.direction = "S";
        break;
        case "S":
        rover.direction = "E";
        break;
        case "E":
        rover.direction = "N";
        break;
    }
    console.log(`New Rover direction: ${rover.direction}`);
}
  
function turnRight(rover){
    switch(rover.direction){
        case "N":
        rover.direction = "E";
        break;
        case "E":
        rover.direction = "S";
        break;
        case "S":
        rover.direction = "W";
        break;
        case "W":
        rover.direction = "N";
        break;
    }
    console.log(`New Rover direction: ${rover.direction}`);
}
  
function moveForward(rover){
    let newPos = { x : rover.x, y : rover.y};
    switch(rover.direction){
        case "N":
            if (rover.y > 0) {
                newPos.y--;
            }
            else{ console.log("Isn't made this move of Rover")}
            break;
        case "E":
            if (rover.x < 9) {
                newPos.x++;
            }
            else{ console.log("Isn't made this move of Rover")}
            break;
        case "S":
            if (rover.y < 9) {
                newPos.y++;
            }
            else{ console.log("Isn't made this move of Rover")}
            break;
        case "W":
            if (rover.x > 0) {
                newPos.x--;
            }
            else{ console.log("Isn't made this move of Rover")}
            break;
    }
    obstacle = hasObstaclesOrRovers(newPos.x,newPos.y); 
    if (obstacle === ""){
        rover.x = newPos.x;
        rover.y = newPos.y;
        rover.travelLog.push(newPos);
        console.log(`New Rover position x:${rover.x} and y:${rover.y}`);
    } else {
        console.log(`An ${obstacle} not permit move Rover to position x:${newPos.x} and y:${newPos.y}`);
    }
}
  
function moveBackward(rover){
    newPos = { x : rover.x, y : rover.y};
    switch(rover.direction){
        case "N":
            if (rover.y < 9) {
                newPos.y++;
            }
            else{ console.log("Isn't made this move of Rover")}
            break;
        case "E":
            if (rover.x > 0) {
                newPos.x--;
            }
            else{ console.log("Isn't made this move of Rover")}
            break;
        case "S":
            if (rover.y > 0) {
                newPos.y--;
            }
            else{ console.log("Isn't made this move of Rover")}
            break;
        case "W":
            if (rover.x < 9) {
                newPos.x++;
            }
            else{ console.log("Isn't made this move of Rover")}
            break;
    }
    obstacle = hasObstaclesOrRovers(newPos.x,newPos.y); 
    if (obstacle === ""){
        rover.x = newPos.x;
        rover.y = newPos.y;
        rover.travelLog.push(newPos);
        console.log(`New Rover position x:${rover.x} and y:${rover.y}`);
    } else {
        console.log(`An ${obstacle} not permit move Rover to position x:${newPos.x} and y:${newPos.y}`);
    }
}
  
  function moveRover(rover, commands){
    for(let c = 0;c < commands.length; c++){
      switch(commands[c]){
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        default:
          console.log(`Only accept l,r,f,b commnads, try again!`);
          break;
      }
    }
  }
  
  moveRover(rover1,"rffrfflfrff");
  moveRover(rover1,"bbllbbrrffblbrttt");
  console.log(rover1.travelLog);
  
  moveRover(rover2,"rffrfflfrff");
  moveRover(rover2,"bbllbbrrffblbr");
  console.log(rover2.travelLog);
  
  console.log(roversOnGrid);
  