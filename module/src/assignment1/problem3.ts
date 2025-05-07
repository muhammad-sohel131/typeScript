function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result:T[] = []
    for(let array of arrays){
        result = [...result, ...array]
    }
    return result
}

console.log(concatenateArrays(["a", "b"], ["c"]))      // Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]
