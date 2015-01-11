var Cat = function (name, current_room, points) {
  this.name = name;
  this.current_room = current_room;
  this.exits = exits;
  this.points = points;
  this.changePoints = function() {
    this.points = points - 1;
  };
  this.changeRoom = function(room) {
    this.current_room = room;
  };
};

var Room = function (new_name, new_description, new_exits, new_points) {
  this.name = new_name;
  this.description = new_description;
  this.exits = new_exits;
  this.points = new_points;
  this.getDescription = function(){
    return this.name + ": " + this.description
  };

};

//
// Begin fixture data!
//
var kitchen = new Room(
  "Kitchen",
  "A nice roomy kitchen. Not very safe. There may be dogs nearby.",
  ["Living Room", "Dining Room"],
  0
);

var living_room = new Room(
  "Living Room",
  "Lots of perches, but frequently full of dogs. Kind of safe, but not a good spot for naps!",
  ["Kitchen"],
  2
);

var dining_room = new Room(
  "Dining Room",
  "There's a big table and some chairs and OH NO IT'S A DOG",
  ["Kitchen", "Bedroom"],
  -4
);

var bedroom = new Room(
  "Bedroom",
  "YAY! We finally found the nice toasty warm sunbeam!",
  ["Stairs"],
  20
);

//
// End fixture data!
//

// don't forget to populate this with data!
var starbuck = new Cat("Starbuck", kitchen, 5);

$(document).ready(function(){
  // should be replaced with your beginning/end game logic
  // while (true) {
    $("#kitchen").click(function() {
      alert( kitchen.getDescription() );
    });

    $("#living-room").click(function() {
      alert( living_room.getDescription() );
    });

    $("#living-room-run").click(function() {
      alert( living_room.getDescription() );
      var header = document.getElementById("#header");
      header.innerHTML = "Starbuck is in the dining room now!"
    });

    $("#kitchen-run").click(function() {
      alert( kitchen.getDescription() );
      var header = document.getElementById();
      header.innerHTML = "Oh no! Starbuck is trapped in the kitchen!"
      starbuck.changePoints
      var points = document.getElementById(#points);
      points.innerHTML = "Starbuck has " + starbuck.points + " escape points"
      // for( i < current_room.exits.lenght)

      points.innerHTML =
    });
    // Add more!
  // }
});
