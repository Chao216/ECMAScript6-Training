class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself() {
    console.log(
      `I am a ${this.description} 
        with ${this.wheels} wheels.`
    );
  }
}

let coolSkiVan = new Vehicle("cool ski van", 4);

console.log(coolSkiVan);
coolSkiVan.describeYourself();

class bus extends Vehicle{
  constructor(description, wheels, seats, doors, describeYourself){
    super(description, wheels, describeYourself)
    this.seats=seats;
    this.doors=doors
  }
}

let markov = new bus("BYD", 12, 36,3)

console.log(markov)
markov.describeYourself();

// while extending a class, put old params in super(). this.newparam = newparam
