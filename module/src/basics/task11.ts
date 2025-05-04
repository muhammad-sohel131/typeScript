// Task 11: Unknown Type
// Objective: Handle different types with the unknown type.

// Instructions:

// Write a function processData(data: unknown) that:
// Checks if data is a string and returns the uppercased version.
// If data is a number, returns the square of it.

const processData = (data: unknown) : string | number => {
    if(typeof data === 'string') return data.toUpperCase()
    if(typeof data === 'number') return Math.pow(data,2)
    let dataType = typeof data
    return `${dataType.charAt(0).toUpperCase() + dataType.slice(1)} type is invalid data`
}

console.log(processData("Sohel"))
console.log(processData(11))
console.log(processData(true))    // Invalid data