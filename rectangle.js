//nodejs syntax
// module.exports = (x, y, callback) => {
const rect = (x, y, callback) => { //this is es6 syntax
  if (x <= 0 || y <= 0) {
    callback(
      new Error(
        `Rectangle dimensions must be greater than zero. Recieved: ${x}, ${y}`
      )
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          perimeter: () => 2 * (x + y),
          area: () => x * y,
        }),
      2000
    );
  }
};
export default rect;
