/**
 * In an interface, we can have properties of complex types 
 * also, i.e., `year` can be a 'number | Date' type as we like.
 * 
 * And also, if we want to have a function inside the 
 * interface, we can always give the name of the function and
 * its return type too, as follows:
 */
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string { // implementation of the summary() method
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

// HOW CAN WE CATCH ERRORS USING INTERFACES?
const newCivic = {
  name: 'civic',
  year: 2009,
  isBroken: true
};
// printVehicle(newCivic); // error: Property 'broken' is missing in type '{ name: string; year: number; isBroken: boolean; }' but required in type 'Vehicle'.ts(2345)

const newerCivic = {
  name: 'civic',
  year: 2015,
  broken: 1
};
// printVehicle(newerCivic); // error: Types of property 'broken' are incompatible. Type 'number' is not assignable to type 'boolean'.ts(2345)
