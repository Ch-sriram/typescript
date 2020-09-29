// some object that describes today's weather
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// function that takes in the object defined above as a param
const logWeather = (forecast: { date: Date, weather: string }): void => {
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
const logWeather3 = ({ date, weather }: { date: Date, weather: string }): void => {
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
