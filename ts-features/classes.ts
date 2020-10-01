// class that represents a Vehicle
class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep beep');
  }
}

// we make an instance of 'Vehicle' class and then we can call
// the drive() method through that instance.
const vehicle1 = new Vehicle();
vehicle1.drive();
vehicle1.honk();

/**
 * Output:
 * ------
 * chugga chugga
 * beep beep
 */
