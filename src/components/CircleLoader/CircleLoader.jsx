import React from "react";
import { CircleLoader } from "react-awesome-loaders";
export const CircleLoaderComponent = () => {
  return (
    <>
      <CircleLoader
        meshColor={"#6366F1"}
        lightColor={"#E0E7FF"}
        duration={2.0}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
    </>
  );
};