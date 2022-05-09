let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,0]
let arr3 = ["a", "b", "c", arr1, arr2]
console.log(arr3)

let arr4 = ["a", "b", "c", ...arr1, ...arr2]

console.log(arr4)

// use ... to unest a nested array inside other array.