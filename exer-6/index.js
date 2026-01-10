var UserRole;
(function (UserRole) {
    UserRole["SUPERADMIN"] = "SUPERADMIN";
    UserRole["MODERATOR"] = "MODERATOR";
    UserRole["VIEWER"] = "VIEWER";
})(UserRole || (UserRole = {}));
function canEditContent(role) {
    return role === UserRole.SUPERADMIN || role === UserRole.MODERATOR;
}
console.log("Can SUPERADMIN edit content? ".concat(canEditContent(UserRole.SUPERADMIN)));
console.log("Can MODERATOR edit content? ".concat(canEditContent(UserRole.MODERATOR)));
console.log("Can VIEWER edit content? ".concat(canEditContent(UserRole.VIEWER)));
// const button=document.querySelector('button') as HTMLButtonElement;
// button.disabled=true;
