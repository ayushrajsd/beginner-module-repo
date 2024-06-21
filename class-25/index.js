// Define the base Pizza class
class Pizza {
  static totalPizzasMade = 0; // Static property to keep count
  #toppings; // Private property
  #size;     // Private property
  #crustType; // Private property

  constructor(toppings, size, crustType) {
    this.#toppings = toppings;
    this.#size = size;
    this.#crustType = crustType;
    Pizza.totalPizzasMade++; // Increment the count each time a new pizza is made
  }

  describe() {
    console.log(`A ${this.#size} pizza with ${this.#toppings.join(", ")} on a ${this.#crustType} crust.`);
  }
  // Static method
  static calculateTotalPizzasMade() {
    console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
  }
}

// Define the StuffedCrustPizza class that extends Pizza
class StuffedCrustPizza extends Pizza {
    #stuffingType; // Private property

  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType); // Call the parent class constructor with super
    this.#stuffingType = stuffingType;

  }

  describeStuffing() {
    console.log(`This pizza has ${this.#stuffingType} stuffing in the crust.`);
  }

  // Overriding the describe method
  describe() {
    super.describe(); // Call the describe method from the parent class
    this.describeStuffing(); // Additional description for the stuffing
  }
}

// Creating instances and calling methods to demonstrate functionality
const customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
customerOrder1.describe(); // Output: A medium pizza with cheese, pepperoni on a thin crust.

const customerOrder2 = new Pizza(["veggies", "pepperoni"], "small", "thick");
customerOrder2.describe(); // Output: A small pizza with veggies, pepperoni on a thick crust.

const specialOrder = new StuffedCrustPizza(
  ["cheese", "mushrooms"],
  "large",
  "thick",
  "cheese and garlic"
);
specialOrder.describe();
// Expected output:
// A large pizza with cheese, mushrooms on a thick crust.
// This pizza has cheese and garlic stuffing in the crust.
Pizza.calculateTotalPizzasMade(); // Output: Total pizzas made: 3
// Attempting to access a private property from outside the class
console.log(specialOrder.toppings); // Undefined, as toppings is private
// console.log(specialOrder.#toppings); // Syntax error: Private field '#toppings' must be declared in an enclosing class
