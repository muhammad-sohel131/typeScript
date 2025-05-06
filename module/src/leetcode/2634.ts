{
type Fn = (n: number, i?:number) => any

function filter(arr: number[], fn: Fn): number[]{
    const filteredArray: number[] = [];

    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            filteredArray.push(arr[i])
        }
    }
    
    return filteredArray;
}

console.log(filter([-2,-1,0,1,2], (n,i) => n+1))
}