let drink = new Set()

drink.add("Coca cola")
drink.add("Fanta")
drink.add("Vodka").add("Water")
console.log(drink)

console.log(drink.size)
console.log("we have: Fanta", drink.has("Fanta"))
drink.delete("Water")
console.log("we have: Water", drink.has("Water"))

//basically set contains only sets of values, no keys.