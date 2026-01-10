var names = ["Alice", "Bob", "Charlie"];
var scores = [85, 92, 78];
var isActive = [true, false];
// names.push(100); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
// scores.push("A+"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// isActive.push("yes"); // Error: Argument of type 'string' is not assignable to parameter of type 'boolean'
console.log("Names: ".concat(names.join(", ")));
console.log("Scores: ".concat(scores.join(", ")));
console.log("Active Status: ".concat(isActive.join(", ")));
var products = ["Table", "Chair", "Couch"];
// products.push(33); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
console.log("Products: ".concat(products.join(", ")));
var myLocation = ["Mogadishu", 2.0469, 45.3182];
// myLocation = [33, "Latitude", "Longitude"]; // Error: Type 'number' is not assignable to type 'string'
myLocation = ['Nairobi', 3.1234, 36.6789]; // Correct
console.log("Location: ".concat(myLocation[0], ", Latitude: ").concat(myLocation[1], ", Longitude: ").concat(myLocation[2]));
