const {a,b,c} = {
    a:1,
    b:2,
    c:3,
}

console.log(a)
console.log(b)
console.log(c)

const lunch = {
    food:"ramen",
    price:10,
    location :"Espoo",
    energy:560
}

function info ({food, energy}) { // you can use index of obejcts as inputs of functions.
    return`${lunch.food} contains ${lunch.energy} Kcal energy`
}

console.log(info(lunch))