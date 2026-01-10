

function echo<T>(data: T): T {
    return data;
}

const str = echo<string>("Hello, TypeScript!");
console.log(str);
const num = echo<number>(42);
console.log(num);
const arr = echo<Array<number>>([1, 2, 3, 4, 5]);
console.log(arr);
const user = echo<{ name: string; age: number }>({ name: "Jamal", age: 22 });
console.log(user);


interface ApiResult<T> {
    status: string;
    data: T;
}

let fullNameResult: ApiResult<string> = {
    status: "success",
    data: "Jamal Abdi"
};
console.log(fullNameResult);

let userResult: ApiResult<{ id: number; username: string }> = {
    status: "success",
    data: { id: 1, username: "jamal123" }
};
console.log(userResult);

function first<T>(arr: T[]): T {
    return arr[0];
}
console.log(first<string>(["apple", "banana", "cherry"]));
console.log(first<number>([10, 20, 30, 40, 50]));
function Objects<T>(data: T): T {
    return { ...data};
}
const merged = Objects<{ name: string, age:number }>({ name: "Jamal" , age: 22 });
console.log(merged);
