function fullName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
console.log(fullName("Jamal", "Abdi"));
function registerUser(username, isAdmin, language) {
    if (language === void 0) { language = 'en'; }
    return "Username: ".concat(username, ", Admin: ").concat(isAdmin !== null && isAdmin !== void 0 ? isAdmin : false, ", Language: ").concat(language);
}
console.log(registerUser("user123"));
console.log(registerUser("adminUser", true, "fr"));
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (acc, score) { return acc + score; }, 0);
    return scores.length ? total / scores.length : 0;
}
console.log(averageScore(85, 90, 78, 92));
