import React, {useState} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Detail from './components/Detail'
import Footer from './components/Footer'
import './App.css'

const ACCESS_TOKEN = 'pk.eyJ1IjoibWlzdXRpbmVrbyIsImEiOiJjanphajZ2NzQwMTVvM2J0aDg2MXZueTF3In0.pTNnGLqr6WvhFghmiiHJdA'
const API_KEY = '4b24129feacca9b38aac8f2021b82534'
const proxy = 'https://cors-anywhere.herokuapp.com/'

const App = () => {
  
  const [placeName, setPlaceName] = useState('')
  const [temp, setTemp] = useState(0)
  const [desc, setDesc] = useState('')
  const [humidity, setHumidity] = useState(0)
  const [pop, setPOP] = useState(0)
  const [wind, setWind] = useState(0)
  const [feel, setFeel] = useState(0)
  const [icon, setIcon] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const geocode = async (location) => {
    if(location) {
      setIsLoading(true)
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=${ACCESS_TOKEN}`)
      const data = await response.json()
      const latitude = data.features[0].center[1]
      const longitude = data.features[0].center[0]
      setPlaceName(data.features[0].text)
      forecast(latitude, longitude)
    }
    setIsLoading(false)
  }

  const forecast = async (latitude, longitude) => {
    const response = await fetch(`${proxy}https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`)
    const data = await response.json()
    setTemp(data.currently.temperature)
    setDesc(data.currently.summary)
    setHumidity(data.currently.humidity * 100)
    setPOP(data.currently.precipProbability * 100)
    setWind(data.currently.windSpeed)
    setFeel(data.currently.apparentTemperature)
    setIcon(data.currently.icon.replace(/-/g, "_").toUpperCase())
    setIsLoading(false)
  }

  return (
    <div>
      <Header placeName={placeName}/>
      <Form geocode={geocode}/>
      <Detail 
        temp={temp}
        desc={desc}
        humid={humidity}
        pop={pop}
        wind={wind}
        feel={feel}
        icon={icon}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  )
}

export default App;
