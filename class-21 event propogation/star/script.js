// Get all star elements
// const stars = document.querySelectorAll(".star");
const parentStar = document.querySelector("#stars");
const allStars = parentStar.querySelectorAll(".star");

// Get the rating display element
const ratingDisplay = document.getElementById("rating");

/**
 * evaluate the two approach and let me know which one is better
 */

// 1. Add a click event listener to each star

// Add a click event listener to each star
// stars.forEach((star) => {
//   star.addEventListener("click", () => {
//     // Get the value from the data-value attribute
//     const value = parseInt(star.getAttribute("data-value"));
//     // Update the rating display and stars based on the clicked value
//     updateRating(value);
//   });
// });

// 2. Add a single click event listener to the parent star element
parentStar.addEventListener("click", (e) => {
  // Get the value from the data-value attribute
  const target = e.target;
  const value = parseInt(target.getAttribute("data-value"));
  // Update the rating display and stars based on the clicked value
  updateRating(value);
});

// Function to update the rating display and filled stars
function updateRating(value) {
  allStars.forEach((star) => {
    // Get the value from the data-value attribute
    const starValue = parseInt(star.getAttribute("data-value"));
    // Toggle the 'filled' class based on whether the star's value is less than or equal to
    // the selected value
    star.classList.toggle("filled", starValue <= value);
  });
  // Update the rating display text content
  ratingDisplay.textContent = value;
}
