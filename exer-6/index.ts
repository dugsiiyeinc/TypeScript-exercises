
enum UserRole{
    SUPERADMIN='SUPERADMIN',
    MODERATOR='MODERATOR',
    VIEWER='VIEWER'
}

function canEditContent(role: UserRole): boolean {
    return role === UserRole.SUPERADMIN || role === UserRole.MODERATOR;
}
console.log(`Can SUPERADMIN edit content? ${canEditContent(UserRole.SUPERADMIN)}`);
console.log(`Can MODERATOR edit content? ${canEditContent(UserRole.MODERATOR)}`);
console.log(`Can VIEWER edit content? ${canEditContent(UserRole.VIEWER)}`);

// const button=document.querySelector('button') as HTMLButtonElement;
// button.disabled=true;