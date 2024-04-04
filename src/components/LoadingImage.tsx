import * as React from "react";
import { useState, FC } from "react";

interface Props {
  imageUri: string;
  className: string;
}

const LoadingImage:FC<Props> = (props) => {
  const [imageStyle, changeImageStyle] = useState({ display: "none" });
  const [loadingStyle, changeLoadingStyle] = useState({});

  return (
    <>
      <div className="d-flex justify-content-center " style={loadingStyle}>
        <div className="spinner-border my-5" style={loadingStyle}></div>
      </div>

      <img
        style={imageStyle}
        src={props.imageUri}
        className={props.className}
        alt="..."
        onLoad={() => {
          changeImageStyle(null);
          changeLoadingStyle({ display: "none" });
        }}
      ></img>
    </>
  );
};

export default LoadingImage;