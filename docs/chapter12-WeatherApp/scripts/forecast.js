// Javascript responsible for interacting with weather api and getting data

const apiKey = 'GVG1zDJXI6QHmmoFNi4Axrx6ReZDsN2Z';

// get weather information
const getWeather = async (locationKey) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locationKey}?apikey=${apiKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
}


// get city information
const getCity = async (city) => {
  
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data[0]);
  return data[0];
}

// getCity('Karlsruhe')  Key: "167218"
// getCity('Karlsruhe')
//   .then(data => getWeather(data.Key))
//   .then(data => console.log(data))
//   .catch(err => console.log(err));