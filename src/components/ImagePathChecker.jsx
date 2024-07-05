import React from "react";
import helldivers2Data from "../gameData/helldivers2.json";

const ImagePathChecker = () => {
  return (
    <div>
      {helldivers2Data.stratagems.offensive.map((el) => {
        console.log(el);
        return <img src={el.image} alt="" />;
      })}
      {helldivers2Data.stratagems.supply.map((el) => {
        console.log(el);
        return <img src={el.image} alt="" />;
      })}
      {helldivers2Data.stratagems.defensive.map((el) => {
        console.log(el);
        return <img src={el.image} alt="" />;
      })}
    </div>
  );
};

export default ImagePathChecker;
