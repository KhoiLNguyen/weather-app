import React, { useState, useEffect } from 'react'

const Header = ({ placeName }) => {
  
  const [time, setTime] = useState(new Date()) // define time according to user's system clock

  // Wait for time to load then re-render time every one second => time is a dependency
  useEffect(() => {
    updateTime()
  }, [time])

  // Function to update time every one second
  const updateTime = () => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
    
  }

  return (
    <div className="hero">
      <h1>Weather App</h1>
      <h1>{placeName}</h1>
      <h1>{time.toLocaleTimeString()}</h1> {/*display time as hh:mm:ss - am/pm string*/}
    </div>
  )
}

export default Header
