// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The animal makes a sound.");
  }
}

// Cat class that extends Animal
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog class that extends Animal
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage:
const cat = new Cat("Domestic Cat");
console.log(cat.species); // Output: Domestic Cat
cat.makeSound(); // Output: The animal makes a sound.
cat.purr(); // Output: purr

const dog = new Dog("Golden Retriever");
console.log(dog.species); // Output: Golden Retriever
dog.makeSound(); // Output: The animal makes a sound.
dog.bark(); // Output: woof
