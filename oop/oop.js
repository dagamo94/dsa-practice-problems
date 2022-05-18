// Object Oriented Programming
// Java, Python

// Inheritance - child inherits parent properties (classes built off other classes)
// Polymorphism - methods and functions inherited by parent can be overwritten or updated
// Encapsulation - all data, methods, properties, etc are stored internally
// Abstraction - private variables (only used internally by the object)

// JavaScript - prototype based language

// DRY - Don't Repeat Yourself
// const dog = {
//   name: "Mickey",
//   color: "brown",
//   species: "terrier",
//   bark: function () {
//     return `${this.name} says woof!`;
//   },
// };

// console.log(dog.name);
// console.log(dog.bark());

// constructor function
// function Dog(name, color, species) {
//   this.name = name;
//   this.color = color;
//   this.species = species;
//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };
// }

// const dog1 = new Dog("Mickey", "brown", "terrier");
// const dog2 = new Dog("Lucky", "white", "pomeranian");

// console.log(dog1.name);
// console.log(dog2.bark());

// using class
// class Dog {
//   constructor(name, color, species) {
//     this.name = name;
//     this.color = color;
//     this.species = species;
//   }

//   bark() {
//     return `${this.name} says woof!`;
//   }

//   about() {
//     return `${this.name} is a ${this.color} ${this.species}`;
//   }
// }

// const dog1 = new Dog("Mickey", "brown", "terrier");
// const dog2 = new Dog("Lucky", "white", "pomeranian");

// console.log(dog1.about());
// console.log(dog2.bark());

// Dog.prototype.dance = function () {
//   return `${this.name} is dancing!`;
// };

// console.log(dog1.dance());

// Array.prototype.max = function () {
//   return Math.max(...this);
// };

// const myArr = [1, 2, 3];

// console.log(myArr.max());

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    hunt() {
      return `${this.name} went hunting!`;
    }
  
    birthday() {
      this.age++;
      return `${this.name} is now ${this.age} years old!`;
    }
  
    isAlive() {
      if (this.age > 12) {
        return false;
      }
  
      return true;
    }
  }
  
  // const birdy = new Animal("Birdy", 11);
  // console.log(birdy.hunt());
  // console.log(birdy.age);
  // console.log(birdy.isAlive());
  // console.log(birdy.birthday());
  // console.log(birdy.birthday());
  // console.log(birdy.age);
  // console.log(birdy.isAlive());
  
  // Inheritance
  class Cat extends Animal {
    constructor(name, age, species, color) {
      super(name, age); // passes parameters to parent to define properties
      this.species = species;
      this.color = color;
    }
  
    meow() {
      return `${this.name} says meow!`;
    }
  
    // polymorphism
    birthday() {
      this.age += 2;
      return `${this.name} is now ${this.age} years old!`;
    }
  }
  
  const myCat = new Cat("Leo", 1, "domestic shorthair", "beige");
  
  // console.log(myCat.hunt());
  // console.log(myCat.meow());
  // console.log(myCat.birthday());
  
  class Character {
    constructor(name, type, level, strength, hitpoints) {
      this.name = name;
      this.type = type;
      this.level = level;
      this.strength = strength;
      this.hitpoints = hitpoints;
    }
  
    printStats() {
      return `Name: ${this.name} | Strength: ${this.strength} | HP: ${this.hitpoints}`;
    }
  
    attack(player) {
      player.hitpoints -= this.strength;
    }
  
    isAlive() {
      if (this.hitpoints <= 0) {
        return `${this.name} is dead!`;
      }
      return `${this.name} is alive!`;
    }
  }
  
  const playerOne = new Character("Ryu", "Warrior", 25, 10, 100);
  const playerTwo = new Character("Ken", "Mage", 20, 5, 50);
  
  // console.log(playerOne.printStats());
  console.log(playerTwo.printStats());
  console.log(playerTwo.isAlive());
  
  playerOne.attack(playerTwo);
  playerOne.attack(playerTwo);
  playerOne.attack(playerTwo);
  playerOne.attack(playerTwo);
  playerOne.attack(playerTwo);
  console.log(playerTwo.printStats());
  console.log(playerTwo.isAlive());
  