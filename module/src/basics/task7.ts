// Task 7: Type Assertion and Narrowing
// Objective: Write a function that behaves differently based on the input type.

// Instructions:

// Create a function that accepts a parameter of type string | number.
// The function should:
// Return the length if the input is a string.
// Return the square if the input is a number.

const checkParam = (param: string | number) : number => {
    if(typeof param == 'string') return param.length

    return Math.pow(param,2)
}

// console.log(checkParam(true))    //it will works and output will be 1, but editor will give you an error
console.log(checkParam("Sohel"))
console.log(checkParam(8))