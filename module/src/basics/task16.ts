// Task 16: Utility Types and Keyof Constraints
// Objective: Access object properties dynamically using keyof.

// Instructions:

// Create a function that:
// Takes an object and a key.
// Returns the property value from the object based on the provided key.
// Use keyof to constrain the key to valid properties of the object.

const getValue = (user: User, key: keyof User) : string => {
    return user[key]
}

const user1: User = {
    name: "Sohel",
    email: "sohelf131@gmail.com"
}

console.log(getValue(user1,'email'))