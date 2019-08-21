import React from 'react'

const Header = ({ placeName }) => {
  return (
    <div>
      <h1>Weather App</h1>
      <h1>12:00:00 - AM</h1>
      <h1>{placeName}</h1>
    </div>
  )
}

export default Header
