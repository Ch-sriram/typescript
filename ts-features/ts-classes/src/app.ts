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
