import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Load = () => {
  const loadingIcon = {
    type: "ThreeDots",
    color: "#db4f7a",
    height: 100,
    width: 100
  }
  return (
    <div className="load-icon">
      <Loader type={loadingIcon.type} color={loadingIcon.color} height={loadingIcon.height} width={loadingIcon.width} />
    </div>
  );
};

export default Load;
