interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    if(this.length === 0) return -1
    return this[this.length - 1]
};


 const arr = [1, 2, 3];
 const arr1: number[] = []

 console.log(arr.last())
 console.log(arr1.last())

