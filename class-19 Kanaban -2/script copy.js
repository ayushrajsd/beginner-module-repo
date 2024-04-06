const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
const textArea = document.querySelector(".textArea-cont");
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; // Default to black
const removeBtn = document.querySelector(".remove-btn");
const allTickets = document.querySelectorAll(".ticket-cont");


let addTaskFlag = false;
let removeTaskFlag = false;

addBtn.addEventListener("click", function () {
  // Display the model
  addTaskFlag = !addTaskFlag;

  if (addTaskFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

removeBtn.addEventListener("click", function () {
  removeTaskFlag = !removeTaskFlag; // Toggle the removeTaskFlag when the button is clicked

  if (removeTaskFlag) {
    alert("Delete button is activated.");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

modalCont.addEventListener("keydown", function (e) {
  const key = e.key;
  if (key === "Shift") {
    const taskContent = textArea.value; // Get the content from the textarea
    // Generates a 6-character ID
    
    // const ticketID = Math.random().toString(36).substring(2, 8);
    let ticketID = shortid()
    createTicket(modalPriorityColor, taskContent, ticketID); // Create a new ticket with the selected color and task content
    modalCont.style.display = "none"; // Hide the modal
    addTaskFlag = false; // Set the addTaskFlag to false
    textArea.value = ""; // Clear the textarea's content
  }
});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    else {
      ticket.remove();
    }
  });
}

allTickets.forEach(function (ticket) {
  handleRemoval(ticket);
})

function createTicket(ticketColor, ticketTask, ticketID) {
  // Create a new ticket container element
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
      <div class="ticket-color" style="background-color: ${ticketColor};"></div>
      <div class="ticket-id">${ticketID}</div>
      <div class="task-area">${ticketTask}</div>
    `;
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);
}

allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    // Remove 'active' class from all priority colors
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });

    // Add 'active' class to the clicked colorElem
    colorElem.classList.add("active");

    modalPriorityColor = colorElem.classList[0];
  });
});
