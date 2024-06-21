// // // // // // const obj = {}
// // // // // // console.log(obj.toString())

// // // // // // const arr = [1,2,3]
// // // // // // console.log(arr.join("->"))

// // // // // // const user = {
// // // // // //     name:'Kohli',
// // // // // //     age: 34
// // // // // // }
// // // // // // console.log(user);

// // // // // // const arr1 = [1,2,3]
// // // // // // console.log(arr1);

// // const animal = {
// //     eats: true,
// //     sleep: true,
// //     walk(){
// //         console.log('the animal walk')
// //     }
// // }
// // console.log(animal);

// // const herbivore = {
// //     eatsMeat: 'naah',
// //     __proto__: animal
// // }

// // const carnivore = {
// //     eatsMeat: 'yes',
// //     __proto__: animal

// // }

// // const rabbit = {
// //     canJump: true,
// //     __proto__: herbivore
// // }

// // const tiger = {
// //     canKill: true,
// //     __proto__: carnivore
// // }

// // console.log(rabbit.eatsMeat);
// // console.log(tiger.eatsMeat);
// // console.log(rabbit.dance);
// // console.log(rabbit.__proto__.__proto__.__proto__.__proto__);

// // // // // // console.log(Object.keys(rabbit))
// // // // // // for(let key in rabbit){
// // // // // //     if(rabbit.hasOwnProperty(key)){
// // // // // //         console.log(key)
// // // // // //     }
// // // // // // }

// // // // // // function User(name){
// // // // // //     this.name = name
// // // // // //     this.msg = function(){
// // // // // //         console.log(`Hello ${this.name}!`)
// // // // // //     }
// // // // // // }

// // // // // // const user1 = new User('Kohli')
// // // // // // const user2 = new User('Dhoni')

// // // // // // console.log(user1.msg === user2.msg)

// // // // // // function BetterUser(name){
// // // // // //     this.name = name
// // // // // // }

// // // // // // BetterUser.prototype.msg = function(){
// // // // // //     console.log(`Hello ${this.name}!`)
// // // // // // }

// // // // // // const user3 = new BetterUser('Shubman')
// // // // // // const user4 = new BetterUser('Rohit')

// // // // // // console.log(user3.msg === user4.msg)

// // // // // // String.prototype.crazyMethod = function(pattern){
// // // // // //     return this.split("").join(pattern)
// // // // // // }
// // // // // // console.log("scaler".crazyMethod("->"))
// // // // // // console.log("scaler".crazyMethod("*"))
// // // // // // console.log("scaler".crazyMethod("<3"))

// // // // // // const carPrototype = {
// // // // // //     displayInfo: function() {
// // // // // //       return `This is a ${this.year} ${this.model}.`;
// // // // // //     }
// // // // // //   };
// // // // // //   const car1 = Object.create(carPrototype);
// // // // // //   car1.model = "Toyota Camry";
// // // // // //   car1.year = 2021;

// // // // // //   const car2 = Object.create(carPrototype);
// // // // // //   car2.model = "Ford Mustang";
// // // // // //   car2.year = 2023;

// // // // // //   console.log(car1.displayInfo()); // "This is a 2021 Toyota Camry."
// // // // // // console.log(car2.displayInfo()); // "This is a 2023 Ford Mustang."

// // // // // // const obj = { name: 'Sample Object' };
// // // // // // console.log(obj.toString());  // Normally works

// // // // // // // Set prototype to null
// // // // // // obj.__proto__ = null;
// // // // // // console.log(obj.toString());  // This will throw an error
// // // // // // // try {
// // // // // // //     console.log(obj.toString());  // This will throw an error
// // // // // // // } catch (e) {
// // // // // // //     console.log("Error:", e.message);
// // // // // // // }

// // // // // // // There is no built-in way to restore the original prototype once it's set to null.

// // // // // function Animal() {}
// // // // // Animal.prototype.speak = function() {
// // // // //   console.log("Sound!");
// // // // // };

// // // // // function Dog() {}
// // // // // Dog.prototype = Object.create(Animal.prototype);

// // // // // const dog = new Dog();
// // // // // console.log(dog); // true
// // // // // Dog.prototype.constructor = Dog;
// // // // // console.log(dog.constructor.name); // Dog

// // // // function A() {}
// // // // function B() {}

// // // // let a = new A();
// // // // let b = new B();

// // // // // Attempting to create a circular prototype chain
// // // // A.prototype = b;
// // // // try {
// // // //     B.prototype = a;  // Throws TypeError in most JS environments
// // // // } catch (e) {
// // // //     console.log("Error:", e.message);
// // // // }
// // // // function Rabbit() {}
// // // // Rabbit.prototype = {
// // // //   eats: true,
// // // // };

// // // // let rabbit = new Rabbit();

// // // // Rabbit.prototype = {};

// // // // console.log(rabbit.eats); // ?

// // // const animal = {
// // //   jumps: null,
// // // };
// // // const rabbit = {
// // //   __proto__: animal,
// // //   jumps: true,
// // // };

// // // alert(rabbit.jumps); // ? (1)

// // // delete rabbit.jumps;

// // // alert(rabbit.jumps); // ? (2)

// // // delete animal.jumps;

// // // alert(rabbit.jumps); // ? (3)

// // function BetterUser(name){
// //     this.name = name
// //  }
 
 
// //  BetterUser.prototype.msg = function(){
// //     console.log(`Hello ${this.name}!`)
// //  }
 
 
// //  const user3 = new BetterUser('Shubman')
// //  const user4 = new BetterUser('Rohit')
 
 
// //  console.log(user3.msg === user4.msg)
// //  console.log(user3)
 

// function Animal() {}
// console.log(Animal.prototype)
// Animal.prototype.speak = function() {
//  console.log("Sound!");
// };


// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);


// const dog = new Dog();
// console.log(dog); // true
// // Dog.prototype.constructor = Animal;
// console.log(dog.constructor.name); // Animal

function Rabbit() {}
Rabbit.prototype = {
 eats: true,
};


let rabbit = new Rabbit();


Rabbit.prototype = {
    eats:"alphanso"
};


console.log(rabbit.eats); // ? -> true