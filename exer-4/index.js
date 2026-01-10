function login(user) {
    return "User ".concat(user.username, " logged in successfully.");
}
var user1 = { id: 12345, username: "john_doe", password: "secure123" };
// user1.id = 54321; // Error: Cannot assign to 'id' because it is a read-only property
var user2 = { id: 67890, username: "jane_smith", password: "mypassword", email: "jane@gmail.com" };
console.log(login(user1));
console.log(login(user2));
