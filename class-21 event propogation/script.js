const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grandparent.addEventListener("click", function () {
  console.log("Grandparent clicked");
});

parent.addEventListener("click", function (e) {
  console.log("Parent clicked");
    e.stopPropagation(); // Stop propagation after clicking the parent element
});

child.addEventListener("click", function (e) {
  console.log("Child clicked");
  e.stopPropagation(); // Stop propagation after clicking the child element
});

grandparent.addEventListener('click', function(e) {
    console.log('Grandparent clicked (Capturing)');
}, true);

parent.addEventListener('click', function(e) {
    console.log('Parent clicked (Capturing)');
    // e.stopPropagation();
  }, true);

  child.addEventListener('click', function() {
    console.log('Child clicked (Capturing)');
  }, true);
