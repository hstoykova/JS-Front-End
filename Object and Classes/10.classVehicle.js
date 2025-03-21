class Vehicle {
  type;
  model;
  parts = {};
  fuel;

  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts.engine = parts.engine;
    this.parts.power = parts.power;
    this.parts.quality = parts.engine * parts.power;
    this.fuel = fuel;
  }

  drive(fuelSpent) {
    this.fuel -= fuelSpent;
  }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle("a", "b", parts, 200);
console.log(vehicle);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

/*
Create a class with the name Vehicle that has the following properties:
· type – a string
· model – a string
· parts – an object that contains:
o engine – number (quality of the engine)
o power – number
o quality – engine * power
· fuel – a number
· drive – a method that receives fuel loss and decreases the fuel of the vehicle by that number

The constructor should receive the type, the model, the parts as an object, and the fuel

In judge post your class (Note: all names should be as described)

*/
