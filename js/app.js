// Dont not show API key on your JS file.

const API_KEY = '0181fdb3127b941f3fc5aa8039c4f340';

const loadTemperature = city  =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res =>res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    // const temperature = document.getElementById('Temperature')
    // console.log(data.main.temp);
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);

    console.log(data.weather[0].main);
}
const setInnerTextById = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
} 
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // city name set
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');