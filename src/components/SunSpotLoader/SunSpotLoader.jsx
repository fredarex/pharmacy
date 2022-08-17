import React from "react";
import { SunspotLoader } from "react-awesome-loaders";
export const SunspotLoaderComponent = (props) => {
  return (
    <>
      <SunspotLoader
        gradientColors={[props.loaderColor]}
        shadowColor={"#3730A3"}
        desktopSize={"25px"}
        mobileSize={"25px"}
      />
      
    </>
  );
};