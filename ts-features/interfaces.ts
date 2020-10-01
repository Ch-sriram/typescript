/**
 * Let's define an object that represents a Honda Civic which 
 * is an old model of the car.
 */
const oldCivic = { name: 'civic', year: 2000, broken: true, };

/**
 * Now, we will define a function that prints the information
 * of any vehicle object which conforms to `oldCivic` kind of
 * data.
 */
const printVehicle = (vehicle: { name: string; year: number; broken: boolean; }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

// Now we can pass in `oldCivic` object to printVehicle() method as shown below.
printVehicle(oldCivic);

/**
 * Although everything works fine, but the point here is, what 
 * if there are more vehicles like `oldCivic`? And what if we
 * always have to define the type annotation for every vehicle
 * parameter as seen above?
 * 
 * All of these can become tedious after a while, and so, we'll
 * see how to use interfaces next, to shorten type annotations
 * into very short statements that refer to a group of types.
 */
