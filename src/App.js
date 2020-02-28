import React from 'react';
import './App.css';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = `7250b4aa5d0ccdb8e2179a7a8f4185ec`;
class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    maxTemp: undefined,
    minTemp: undefined,
    error: undefined,
    lon: undefined,
    lat: undefined,
    weather: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    

    if(city){
      const api_url = await 
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      this.setState({
        // temp: data.main.temp,
        // city: data.name,
        // country: data.sys.country,
        // maxTemp: data.main.temp_max,
        // minTemp: data.main.temp_min,
        // lat: data.coord.lat,
        // lon: data.coord.lon,
        // weather: data.weather[0].main,
        // error: "Please enter the city"
      });
    } else{
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        maxTemp: undefined,
        minTemp: undefined,
        error: 'Please enter the city',
        lon: undefined,
        lat: undefined,
        weather: undefined
      });
    }
  }

  render(){
    return (
      <div>
        <Info />
        <Form weatherMethod={this.getWeather} />
        <Weather 
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        maxTemp={this.state.maxTemp}
        minTemp={this.state.minTemp}
        lat={this.state.lat}
        lon={this.state.lon}
        weather={this.state.weather}
        error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
