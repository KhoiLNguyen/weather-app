import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Load from './Load'

const Detail = ({ temp, desc, humid, pop, wind, feel, icon, isLoading }) => {
  const styleIcon = {
    icon,
    color: "#fee140",
    size: 72,
    animate: true
  };

  let content = isLoading && <div className="display-detail"><Load /></div>

  if (!isLoading && desc) {
    content = (
      <div className="display-detail">
        <div className="temp-icon">
          <h3>{temp}&#8457;</h3>
          <ReactAnimatedWeather
            icon={styleIcon.icon}
            color={styleIcon.color}
            size={styleIcon.size}
            animate={styleIcon.animate}
          />
        </div>
        <h4>{desc}</h4>
        <ul>
          <li>Humid: {humid.toFixed(1)}%</li>
          <li>POP: {pop}%</li>
          <li>Wind: {wind} mph</li>
          <li>Feels like: {feel}&#8457;</li>
        </ul>
      </div>
    );
  }

  return content;
};

export default Detail;
