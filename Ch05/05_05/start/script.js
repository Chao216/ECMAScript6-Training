function* dosomething(i) {
    yield i;
    yield i++;
    yield i++;
    yield i++;
    yield i++;
    yield i++;
    yield i++;
    yield i++;
    yield i++;
    yield i++;
    yield i++;

}

const starter = dosomething(10)

console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
console.log(starter.next().value);
