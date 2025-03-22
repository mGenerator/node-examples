//nodejs syntax
// const rect = require("./rectangle");
import rect from "./rectangle.js"; //this is es6 syntax

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w} `);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("ERROR:", err.message);
    } else {
      console.log(`Area of rectangle with dimensions ${l}, ${w}: ${rectangle.area()}`);
      console.log(`Perimeter of rectangle with dimensions ${l}, ${w}: ${rectangle.perimeter()}`);
    }
  });
  console.log('This statement is logged after the call to rect()');
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
