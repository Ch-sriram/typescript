// EXAMPLE I

// some object that describes today's weather
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// function that takes in the object defined above as a param
const logWeather = (forecast: { date: Date; weather: string; }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

/**
 * One little optimization we can do in logWeather() is that we
 * can use ESNext to directly pull forecast.date and 
 * forecast.weather into their own variables.
 */

// logWeather() in ESNext, without type annotations
const logWeather2 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

logWeather2(todaysWeather); // same output as from line 13

// logWeather() in ESNext, with type annotations
const logWeather3 = ({ date, weather }: { date: Date; weather: string; }): void => {
  console.log(date);
  console.log(weather);
};

logWeather3(todaysWeather); // same output as from line 27

/**
 * Output
 * ------
 * 2020-09-29T13:08:55.293Z
 * sunny
 * 2020-09-29T13:08:55.293Z
 * sunny
 * 2020-09-29T13:08:55.293Z
 * sunny
 */

// EXAMPLE II - A More Complex Example

// Assume that we've a `profile` object for a person as follows
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  // ESNext way to define a function inside an object
  setAge(age: number): void {
    this.age = age;
  },
  getAge(): number {
    return this.age;
  }
};

// Destructuring the `age` from the `profile` object

// const { age } = profile; // destructuring w/o type annotation
const { age }: { age: number } = profile; // destructuring with annotations where even the type information is to be given by destructuring the object.

// Destructuring the `lat` & `lng` from the `profile` object

// const { coords: { lat, lng } } = profile; // this without using type annotations
const { coords: { lat, lng } }: { coords: { lat: number; lng: number; } } = profile;

// Destructuring the `setAge` function from the `profile` obj
// const { setAge } = profile; // w/o using TS annotation
const { setAge }: { setAge: (age: number) => void } = profile;
setAge(25); // now `profile.age` is 25

const { getAge }: { getAge: () => number } = profile;
console.log(getAge()); // 25

/**
 * Output
 * ------
 * 25
 */
