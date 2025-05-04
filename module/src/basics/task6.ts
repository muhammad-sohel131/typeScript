// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.

// Instructions:

// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

const sum = (...nums: number[]): number => {
    let result = nums.reduce((prev, cur) => prev + cur, 0)
    return result;
}

console.log(sum(3,5,3))