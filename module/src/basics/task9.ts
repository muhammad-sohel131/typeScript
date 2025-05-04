// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.

// Instructions:

// Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.

const getEmployeeCity = (employee: {address?: {city?: string}}) : string => {
    return employee?.address?.city || 'No Found!'
}

console.log(getEmployeeCity({address: {city: "Dhaka"}}))
