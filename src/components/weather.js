import React from 'react'
import App from '../App'

class Weather extends React.Component{
    render(){
        return(
            <div className="weatherComponent">
                {this.props.city &&
                    <div className="weather">
                        <p>Location: {this.props.city}, {this.props.country}</p>
                        <p>Weather: {this.props.weather}</p>
                        <p>Temperature: {this.props.temp}</p>
                        <p>Max: {this.props.maxTemp}</p>
                        <p>Min: {this.props.minTemp}</p>
                    </div>
                }
                <p>{this.props.error}</p>   
            </div>
        )
    }
}
export default Weather