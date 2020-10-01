interface Reportable {
  summary(): string;
}

/**
 * This `printSummary()` method can now be used by anyone that
 * passes in a parameter that satisfies the 'Reportable' 
 * interface.
 */
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

const newCivic = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name} \nYear: ${this.year}`;
  }
};

const jeeruSoda = {
  colour: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

printSummary(newCivic); // `newCivic` fulfils the 'Reportable' interface, so no error.
printSummary(jeeruSoda); // no error since `jeeruSoda` fulfils the 'Reportable' interface.

/**
 * Although the objects `newCivic` and `jeeruSoda` are two 
 * totally different objects, we are still able to use the
 * `printSummary()` method and pass in different kind of 
 * objects, and so the point is, we can use a single interface
 * and describe the shape of very different objects, and when
 * we do so, we can let those objects implement different 
 * properties and functions, and let them interact with these
 * functions that accept an interface which can is just a 
 * generic constraint that needs to be fulfilled by the object.
 */

/**
 * Output:
 * ------
 * Name: civic
 * Year: Thu Oct 01 2020 17:05:41 GMT+0530 (India Standard Time)
 * My drink has 40 grams of sugar
 */
