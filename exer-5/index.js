var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function echo(data) {
    return data;
}
var str = echo("Hello, TypeScript!");
console.log(str);
var num = echo(42);
console.log(num);
var arr = echo([1, 2, 3, 4, 5]);
console.log(arr);
var user = echo({ name: "Jamal", age: 22 });
console.log(user);
var fullNameResult = {
    status: "success",
    data: "Jamal Abdi"
};
console.log(fullNameResult);
var userResult = {
    status: "success",
    data: { id: 1, username: "jamal123" }
};
console.log(userResult);
function first(arr) {
    return arr[0];
}
console.log(first(["apple", "banana", "cherry"]));
console.log(first([10, 20, 30, 40, 50]));
function Objects(data) {
    return __assign({}, data);
}
var merged = Objects({ name: "Jamal", age: 22 });
console.log(merged);
