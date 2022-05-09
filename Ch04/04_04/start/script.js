for (let item of "Helisinki University") {
    console.log(item)
}

// here the item is replacable by any term, just make sure same as inside the log ().


let topics = new Map()

topics.set("name", "Harry")
topics.set("age",23)
topics.set('maritual', false)

for (let item of topics) {
    console.log(item)
}

for (let item of topics.keys()) { // dont't forger the () after function of map object.!!!!!!
    console.log(item)
}

for (let item of topics.values()) {
    console.log(item)
}

for (let item of topics.entries()) {
    console.log(item)
}