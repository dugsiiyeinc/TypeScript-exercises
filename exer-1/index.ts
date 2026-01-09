let productName:string = "Laptop";
let productPrice:number = 999.99;
let isDiscountAvailable:boolean = true;

// productName=33; // Error: Type 'number' is not assignable to type 'string'
// productPrice="Free"; // Error: Type 'string' is not assignable to type 'number'
// isDiscountAvailable="yes"; // Error: Type 'string' is not assignable to type 'boolean'

productName="Smartphone"; // Correct
productPrice=799.99; // Correct
isDiscountAvailable=false; // Correct

console.log(`Product: ${productName}, Price: $${productPrice}, Discount Available: ${isDiscountAvailable}`);

function getDiscount(price:number,discount:number):number{
    return price - (price*discount/100);
}

console.log(getDiscount(productPrice,10));

function printLength(x:unknown){
    if(typeof x === "string"){
        console.log(x.length); 
    }
}
printLength("Hello World");
// printLength(12345);