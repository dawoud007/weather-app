import React, { Component } from 'react'
import Weather from './components/backdata'
import Form from './components/form'
const apiKey = 'ccebbbad91d4bf1c0f98844156598b51'


class App extends Component {
    state = {
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: ""
    }
    getWeather = async(e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        console.log(city, country)
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}`)
        const data = await api.json();
        if (city && country) {
            this.setState({
                tempreature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            })
        } else {
            this.setState({

              tempreature: "",
              city: "",
              country: "",
              humidity: "",
              description: "",
              error: "please enter valid data"

            })

        }
console.log(this.state)
console.log(data)
    }

    render() {
        return (
            <div className = "app" >

            <Form getWeather = { this.getWeather }/>
            <Weather

                          tempreature={this.state.tempreature}
                          city={this.state.city}
                          country={this.state.country}
                          humidity={this.state.humidity}
                          description={this.state.description}
                          error=""
                          / >

            </div>


        )


    }
}

export default App;
