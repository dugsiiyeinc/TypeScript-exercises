let names:Array<string> = ["Alice", "Bob", "Charlie"];
let scores:Array<number> = [85, 92, 78];
let isActive:Array<boolean> = [true, false];

// names.push(100); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
// scores.push("A+"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// isActive.push("yes"); // Error: Argument of type 'string' is not assignable to parameter of type 'boolean'

console.log(`Names: ${names.join(", ")}`);
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Active Status: ${isActive.join(", ")}`);

let products:Array<string> = ["Table", "Chair", "Couch"];

// products.push(33); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

console.log(`Products: ${products.join(", ")}`);

let myLocation:[string, number, number]= ["Mogadishu", 2.0469, 45.3182];
// myLocation = [33, "Latitude", "Longitude"]; // Error: Type 'number' is not assignable to type 'string'
myLocation=['Nairobi', 3.1234, 36.6789]; // Correct

console.log(`Location: ${myLocation[0]}, Latitude: ${myLocation[1]}, Longitude: ${myLocation[2]}`);