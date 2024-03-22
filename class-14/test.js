async function placeOrder(drink) {
//   return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      return ("Order for Coffee Placed");
    } else {
      throw new Error("Order cannot be Placed");
    }
//   });
}
// function placeOrder(drink) {
//     return new Promise(function (resolve, reject) {
//       if (drink === "coffee") {
//         resolve("Order for Coffee Placed");
//       } else {
//         reject("Order cannot be Placed");
//       }
//     });
//    }

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    resolve(`${orderPlaced} and Served`);
  });
}

function genreateBill(processedOrder) {
  return new Promise(function (resolve) {
    resolve(`${processedOrder} and Bill generated with 200Rs`);
  });
}

// Async and Await
// to use async await you need to create Functions

async function serveOrder() {
  try {
    let orderstatus = await placeOrder("tea");
    console.log(orderstatus);
    let processedOrder = await processOrder(orderstatus);
    console.log(processedOrder);
    let generatedBill = await genreateBill(processedOrder);
    console.log(generatedBill);
  } catch (error) {
    console.log("reaching catch block", error.message);
  }
}

serveOrder();
