type F = (x: number) => number

function compose(functions: F[]): F {
    let length = functions.length - 1
    return function(x):number{
       while(length >= 0){
            x = functions[length](x)
            length--;
       }
       return x
    }
}

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))