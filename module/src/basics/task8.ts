// Task 8: Intersection Types
// Objective: Practice using intersection types.

// Instructions:

// Create a type AdminUser that is an intersection of:
// User with properties name and email
// Admin with property adminLevel
// Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

type User = {
    name: string,
    email: string
}

type Admin = {
    adminLevel: string
}

type AdminUser = User & Admin;

const describeAdmin = (user: AdminUser):string => {
    const msg : string = `
        My name is ${user.name} and My email address is ${user.email}. 
        I am a ${user.adminLevel}
    `
    return msg
}

console.log(describeAdmin({
    name: "Sohel",
    email: "sohelf131@gmail.com",
    adminLevel: 'Moderator'
}))