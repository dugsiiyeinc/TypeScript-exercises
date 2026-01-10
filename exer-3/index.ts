
function fullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Jamal", "Abdi"));

function registerUser(username: string, isAdmin?: boolean, language:string='en'): string {
    return `Username: ${username}, Admin: ${isAdmin ?? false}, Language: ${language}`;
}
console.log(registerUser("user123"));
console.log(registerUser("adminUser", true, "fr"));

function averageScore(...scores: number[]): number {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return scores.length ? total / scores.length : 0;
}
console.log(averageScore(85, 90, 78, 92));