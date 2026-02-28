import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  const getWeather = async()=>{
    const apiKey = import.meta.env.API_KEY; 

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    setWeather(response.data)
  }

  return (
    <div className='container'>
      <h1>Weather App</h1>
      <input type="text" placeholder='Enter city'
        onChange={e=>{
          setCity(e.target.value)
        }}
      /><br />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div className='weather-card'>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
  
        </div>
      )}



    </div>
  )
}

export default App
