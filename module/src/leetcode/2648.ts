function* fibGenerator(): Generator<number, any, number> {
    let a = 0, b = 1;
    while(true){
        yield a;
        [a, b] = [b, a + b]
    } 
}

const gen = fibGenerator();

console.log(gen.next().value)
console.log(gen.next().value)