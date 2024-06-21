// Examples of truthy values
const truthyValues = [1, -1, "hello", {}, [], () => {}];

// Test each truthy value in an if statement
truthyValues.forEach((value) => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});
