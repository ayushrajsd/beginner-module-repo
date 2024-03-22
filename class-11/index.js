// function greet(name) {
//   return `Hello, ${name}!`;
// }
// function farewell(name) {
//   return `Goodbye, ${name}!`;
// }

// function createSalutation(name, fn) {
//   console.log(fn(name));
// }

// createSalutation("Alice", greet);
// createSalutation("Bob", farewell);

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

console.log(calculateAge(1988)); // This will depend on the current year

function getRandomNumber() {
    return Math.random(); // Returns a new random number each time
}

console.log(getRandomNumber());
console.log(getRandomNumber());

function updateProfile(profile) {
    profile.lastUpdated = new Date(); // Modifies the object passed in
    return profile;
}

const userProfile = { name: "Jane Doe", lastUpdated: new Date('2024-03-07') };
console.log(updateProfile(userProfile));
