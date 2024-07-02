import React from "react";
import helldivers2Data from "../gameData/helldivers2.json";

console.log(helldivers2Data)

const ImagePathChecker = () => {
  return (
    <div>
      {helldivers2Data.helmets.map((el) => {
        return <img src={el.image} alt="" />;
      })}
    </div>
  );
};

export default ImagePathChecker;
