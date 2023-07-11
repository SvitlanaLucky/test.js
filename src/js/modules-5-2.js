// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 10;

// console.log(objC);
// console.log(objB);
// console.log(objA);

// console.log(objC.hasOwnProperty('z'));
// console.log(objC.isPrototypeOf('z'));
// _______________________________________________________________________________

// const Car = function ({
//   brand,
//   model,
//   price,
// } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.changePrice = function (
//   newPrice
// ) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// const myCar2 = new Car({
//   brand: 'Saab',
//   model: '9-3',
//   price: 45000,
// });
// myCar2.changePrice(25000);
// console.log(myCar2);

// const myCar3 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 15000,
// });
// console.log(myCar3);

// ______________________________________________________________________________

// const CounterPlugin = function ({
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
// };

// CounterPlugin.prototype.increment =
//   function () {
//     this._value += this._step;
//   };

// CounterPlugin.prototype.decrement =
//   function () {
//     this._value -= this._step;
//   };

// const counter = new CounterPlugin({
//   step: 10,
// });

// console.log(counter);

// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter);
// _______________________________________________________________________________

// ❤️ wind + V
console.log('❤️');
// ___________________________________________________________________________
