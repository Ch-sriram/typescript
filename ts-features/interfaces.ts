/**
 * We will create an interface that just lays down what kind 
 * of data we can expect from some entity.
 */
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
};

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

/**
 * Now, instead of giving a long type annotation, we can simply
 * replace it with the interface that we defined above as 
 * 'Vehicle'
 */
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic); // even though `oldCivic` is not annotated by 'Vehicle' interface, but TS knows that the data inside the `oldCivic` object conforms to the data types mentioned in the 'Vehicle' interface, and so, this line is legal.

// HOW CAN WE CATCH ERRORS USING INTERFACES?
const newCivic = {
  name: 'civic',
  year: 2009,
  isBroken: true
};

/**
 * Now if we pass `newCivic` to the printVehicle() method, we
 * will get an error from the TS compiler.
 */
// printVehicle(newCivic); // error

/**
 * The Error for (line 41) is the following:
 * ----------------------------------------
 * Argument of type '{ name: string; year: number; isBroken: boolean; }' is not assignable to parameter of type 'Vehicle'.
 * Property 'broken' is missing in type '{ name: string; year: number; isBroken: boolean; }' but required in type 'Vehicle'.ts(2345)
 */

const newerCivic = {
  name: 'civic',
  year: 2015,
  broken: 1
};

// printVehicle(newerCivic); // error

/**
 * The Error for (line 56) is the following:
 * ----------------------------------------
 * Argument of type '{ name: string; year: number; broken: number; }' is not assignable to parameter of type 'Vehicle'
 * Types of property 'broken' are incompatible. Type 'number' is not assignable to type 'boolean'.ts(2345)
 */
