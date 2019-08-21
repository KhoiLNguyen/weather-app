import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';

const Detail = ({ temp, desc, humid, pop, wind, feel, icon, isLoading }) => {

  

  const styleIcon = {
    icon,
    color: 'goldenrod',
    size: 64,
    animate: true
  }

  let content = <p>Loading ....</p>
  
  if(!isLoading) {
    content = (
      <div>
      <h3>{temp}&#8457;</h3>
      <ReactAnimatedWeather
        icon={styleIcon.icon}
        color={styleIcon.color}
        size={styleIcon.size}
        animate={styleIcon.animate}
      />
      <h4>{desc}</h4>
      <ul>
        <li>Humid: {humid}%</li>
        <li>POP: {pop}%</li>
        <li>Wind: {wind} mph</li>
        <li>Feels like: {feel}&#8457;</li>
      </ul>
    </div>
    )
  }

  return content
}

export default Detail
