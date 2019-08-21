import React, { useState, useEffect } from 'react'

const Header = ({ placeName }) => {
  

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    updateTime()
  }, [time])

  const updateTime = () => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
    
  }

  return (
    <div>
      <h1>Weather App</h1>
      <h1>{time.toLocaleTimeString()}</h1>
      <h1>{placeName}</h1>
    </div>
  )
}

export default Header
