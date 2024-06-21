const joe = {
    nickName: "Joe",
    arrow: () => console.log(`arrow: ${this.nickName}`),
    regular: function () {
      console.log(`regular: ${this.nickName}`); // Joe
    },
    eventuallySayName: function() {
        function actuallySayName() {
            console.log(`first: ${this.nickName}`);
          }
 
 
      // Create an arrow function
      const actuallySayNameWithArrow = () => {
        console.log(`second: ${this.nickName}`); // Joe
      };
 
 
      // Call that in 1 second
      setTimeout(actuallySayName, 1000);
      setTimeout(actuallySayNameWithArrow, 1000);
    },
 
   };
   
   
   // window.nickName = "Ayush";
   joe.arrow();
   joe.regular();
   joe.eventuallySayName();
