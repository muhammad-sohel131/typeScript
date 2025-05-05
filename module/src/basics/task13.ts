// Task 13: Generics with Functions and Interfaces
// Objective: Use generics to handle different types.

// Instructions:

// Create a generic function that:
// Accepts an array of any type.
// Returns a new array with duplicate values removed.

const removeDuplicates = <T>(arr: T[]): T[] => {
    return Array.from(new Set(arr))
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3]))
console.log(removeDuplicates(['Rahim','Karim','Rahim','Samim', 'Karim']))
console.log(removeDuplicates([1,3,'Karim',3]))