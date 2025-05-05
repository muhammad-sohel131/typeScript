// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.

// Instructions:

// Write an asynchronous function that:
// Simulates fetching user data (containing name and age).
// Returns the data after a short delay.

type UserData = {
    name: string;
    age: number;    
}

const fetchUserData = async (): Promise<UserData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John Doe", age: 30 });
        }, 2000)
    })
}

fetchUserData().then((data) => console.log(data))