class Vehicle {
  constructor(wheels) {
     this.wheels = wheels;
  }
  toString() {
     return 'Wheels: ' + this.wheels + ' ';
  }
}

class Car extends Vehicle {
  constructor(color) {
     super(4);
     this.color = color;
  }
  toString() {
     return super.toString() + ' colored: ' + this.color;
  }
}

let motorcycle = new Vehicle(2);
console.log(motorcycle.toString());

let myCar = new Car('blue');
console.log(myCar.toString());

console.log(typeof myCar);
console.log(myCar instanceof Car);
console.log(myCar instanceof Vehicle);