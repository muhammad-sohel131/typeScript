// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

const printUser = (name:string, age:number, role?: 'admin' | 'user' | 'guest') => {
    const msg = `I am ${name}, ${age} years old${role ? ', and ' + role : '' }.`
    console.log(msg)
}

printUser('Md. Sohel', 24)
printUser('Md Samim', 56, 'guest')