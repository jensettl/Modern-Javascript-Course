// Javascript for DOM Manipulation / Showing Elements & Content

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {

  const cityDetails = data.cityDetails;
  const weather = data.weather;

  // destructure properties
  // const {cityDetails, weather} = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);
  
  // remove d-none class if present
  if(card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

};


const updateCity = async(city) => {

  // getCity returns a promise, await makes sure function is finished before assigning the value
  const cityDetails = await getCity(city);
  const weatherDetails = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weather: weatherDetails
  };

}


cityForm.addEventListener('submit', (event) => {

  //prevent default action
  event.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update UI with new city information
  updateCity(city)
    .then(data => {
      updateUI(data);
      console.log(data)
    })
    .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}