var productName = "Laptop";
var productPrice = 999.99;
var isDiscountAvailable = true;
// productName=33; // Error: Type 'number' is not assignable to type 'string'
// productPrice="Free"; // Error: Type 'string' is not assignable to type 'number'
// isDiscountAvailable="yes"; // Error: Type 'string' is not assignable to type 'boolean'
productName = "Smartphone"; // Correct
productPrice = 799.99; // Correct
isDiscountAvailable = false; // Correct
console.log("Product: ".concat(productName, ", Price: $").concat(productPrice, ", Discount Available: ").concat(isDiscountAvailable));
function getDiscount(price, discount) {
    return price - (price * discount / 100);
}
console.log(getDiscount(productPrice, 10));
function printLength(x) {
    if (typeof x === "string") {
        console.log(x.length);
    }
}
printLength("Hello World");
// printLength(12345);
