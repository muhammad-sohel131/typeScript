type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let val = init
    for(let i of nums){
        val = fn(val, i);
    }
    return val
};

const nums = [1,4,3,4]
const add: Fn = (accum: number, curr: number) : number => {
    return accum + curr
}
console.log(reduce(nums, add, 0))