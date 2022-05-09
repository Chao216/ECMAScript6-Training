let food = "Shin Ramen"

let myfood = food.repeat(10)

console.log(myfood)

let something = {
  do1(input) {
    console.log("do1".repeat(input))
  },
  do2(input) {
    console.log("do2".repeat(input))
  },
treefunc(cishu) {
  console.log("WOkamkan shi shenme ".repeat(cishu))
}
}

something.do1(10)
something.do2(200)
something.treefunc(100)