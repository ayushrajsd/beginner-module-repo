const categoriesContainer = document.getElementById("categories");

categoriesContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;

  // Check if the clicked element is a product
  if (clickedElement.classList.contains("product")) {
      const parent = clickedElement.parentElement;
      const category = parent.querySelector("h2").textContent;
      // const category = clickedElement
      //   .closest(".category")
      //   .querySelector("h2").textContent;
    const product = clickedElement.textContent;

    console.log(`Clicked on ${product} in the ${category} category.`);
    // Handle the click action for the product here
  }
}); 