/**
 * In the 'Vehicle' Interface, we have properties defined as 
 * `name`, `year`, `broken` and `summary()`, and so, any object
 * that implements the Vehicle interface must have the 
 * properties `name`, `year`, `broken` & `summary()`.
 * 
 * And so, if the object that implements the 'Vehicle' 
 * interface has any other properties which are not defined in 
 * the 'Vehicle' interface, it doesn't matter to TS, as long as
 * the object implements all the required properties that are
 * described in the 'Vehicle' interface.
 */
interface Vehicle {
  summary(): string;
};

/**
 * `oldCivic` fulfils the 'Vehicle' interface's requirements
 * and so it qualifies the 'Vehicle' interface's contract.
 */
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

/**
 * Although the code works above, but the naming of the 
 * interface is incorrect. Because we have to name an interface
 * semantically, as what it suggests that it is doing. 
 * 
 * And interface named 'Vehicle' cannot only have a `summary`
 * property which is a function that returns a 'string'.
 * 
 * If that's the case, then the interface should be called 
 * simply 'Reportable', and not 'Vehicle', because it is just
 * and interface that has the `summary` property whose job is 
 * to simply report.
 */
interface Reportable {
  summary(): string;
}

/**
 * Now we should also fix the name of the name of the method
 * to `printSummary()` instead of `printVehicle()` and also,
 * we should rename the parameter as `item` instead of 
 * `vehicle`, as that's more semantic/logical compared to 
 * what we had earlier.
 */
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

/**
 * Now we can send in any object to `printSummary()` method 
 * that satisfies the contract laid out by the 'Reportable'
 * interface.
 */
const newCivic = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name} \nYear: ${this.year}`;
  }
};

printSummary(newCivic); // `newCivic` fulfils the 'Reportable' interface.

/**
 * Output:
 * ------
 * Name: civic
 * Name: civic 
 * Year: Thu Oct 01 2020 17:05:41 GMT+0530 (India Standard Time)
 */
