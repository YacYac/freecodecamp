function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var debris = arr;
  var orbitalArray = [];
  debris.forEach(function(piece) {
    var orbitalPeriod = Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + piece.avgAlt, 3)/GM));
    console.log("name: " + piece.name + "\navgAlt: " + piece.avgAlt + "\norbitalPeriod: " + orbitalPeriod);
    orbitalArray.push({name: piece.name, orbitalPeriod: orbitalPeriod});
  });
  return orbitalArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
