// EXAMPLE 1
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// combination og 'Admin' & 'Employee' types
type ElevatedEmployee = Admin & Employee; // this is an intersection type

const e1: ElevatedEmployee = {
  name: 'Ram',
  privileges: ['create-server'],
  startDate: new Date(),
};

// NOTE: we can do the same as above using interfaces as shown below
interface AdminInterface {
  name: string;
  privileges: string[];
};

interface EmployeeInterface {
  name: string;
  startDate: Date;
};

interface ElevatedEmployeeInterface extends AdminInterface, EmployeeInterface { };

const e2: ElevatedEmployeeInterface = {
  name: 'Roop',
  privileges: ['access-server'],
  startDate: new Date(),
};


// EXAMPLE 2
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // when we hover on 'Universal', we will see the following: type Universal = number

/**
 * Here, 'Universal' type is an intersection of 'Combinable' 
 * and 'Numeric' types, which converts to the following:
 *  type Universal = (string | number) & (number | boolean)
 * the intersection of the statement above would give us `number`
 */

// EXAMPLES on Type Guards

// Ex 1.
function add(a: Combinable, b: Combinable) {
  // return a + b; // this doesn't work, as Operator '+' cannot be applied to types 'Combinable' and 'Combinable'.ts(2365)
  // Before returning `a + b`, we have to check the type of data we're returning as follows:
  if (typeof a === 'string' || typeof b === 'string') // this is a type guard using `typeof` keyword
    return a.toString() + b.toString();
  return a + b; // if a and b are numbers
}

// Ex 2.
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name); // no error as `name` property is part of both 'Employee' & 'Admin' types
  // console.log('Privileges: ' + emp.privileges); // error: `privileges` is a property that exists in 'Admin' type, but not in 'Employee' type, and so, we have to use a type guard to access `privileges` property
  // console.log('Start Date: ' + emp.startDate); // Property 'startDate' does not exist on type 'UnknownEmployee'. Property 'startDate' does not exist on type 'Admin'.ts(2339)

  // we cannot use the type guard wrt `typeof` keyword as here,
  // type is not the problem --- as `typeof emp` will just be 
  // of 'object' type.

  // using the type guard in the following way is also violating the TS rules
  // if (emp.privileges) {/** do something */}
  // if (emp.startDate) {/** do something */}

  // we can definitely use the type guard wrt the `in` keyword
  // as shown below
  if ('privileges' in emp) console.log('Privileges: ' + emp.privileges);
  if ('startDate' in emp) console.log('Start Date: ' + emp.startDate);
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Roop', startDate: new Date(), });

// Ex 3. Type Guards when working with classes
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo... ' + amount);
  }
}

// since 'Car' and 'Truck' are classes, they'll be converted 
// down to function constructors, and an instance of any of the
// 'Car' or 'Truck' classes can easily be identified using 
// `instanceof` keyword as shown below
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive(); // no error as both 'Car' & 'Truck' have the drive() methods, and depending on the instance that's sent in to useVehicle function, we'll call Truck's drive() or Car's drive()

  // vehicle.loadCargo(); // Property 'loadCargo' does not exist on type 'Vehicle'. Property 'loadCargo' does not exist on type 'Car'.ts(2339)

  // for loadCargo(), we have to put in a type guard using 
  // the `in` keyword, or by using the `instanceof` keyword
  if (`loadCargo` in vehicle) vehicle.loadCargo(20);

  // using the `in` is not advisable because we can mistype 
  // the property name we are trying to type guard, and so,
  // we can use `instanceof` as follows
  if (vehicle instanceof Truck) vehicle.loadCargo(100);
}

useVehicle(v1);
useVehicle(v2);

/**
 * Output:
 * ------
 * Name: Ram
 * Privileges: create-server
 * Start Date: Mon Oct 19 2020 18:19:59 GMT+0530 (India Standard Time)
 * Name: Roop
 * Start Date: Mon Oct 19 2020 18:20:54 GMT+0530 (India Standard Time)
 * Driving...
 * Driving a truck...
 * Loading cargo... 20
 * Loading cargo... 100
 */
