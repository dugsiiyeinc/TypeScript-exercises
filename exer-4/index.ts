
interface User{
    readonly id: number;
    username: string;
    password: string;
    email?: string;
}
function login(user: User){
    return `User ${user.username} logged in successfully.`;
}
const user1: User = { id:12345, username: "john_doe", password: "secure123" };

// user1.id = 54321; // Error: Cannot assign to 'id' because it is a read-only property

const user2: User = { id:67890, username: "jane_smith", password: "mypassword", email: "jane@gmail.com" };
console.log(login(user1));
console.log(login(user2));
