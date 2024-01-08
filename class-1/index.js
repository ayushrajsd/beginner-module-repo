for (let i = 0; i < 10; i++) {
    console.log("inner ", i);
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
//   console.log("after the loop", i);