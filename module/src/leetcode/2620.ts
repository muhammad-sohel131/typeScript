function createCounter(n: number): () => number {
    let i = 0
    return function() {
        let sum = n + i
        i++
        return sum
    }
}

const counter = createCounter(-2);
console.log(counter())
console.log(counter())
console.log(counter())