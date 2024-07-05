import React from "react";

const SavedLoadouts = () => {

  let savedLoadoutsJSON = localStorage.getItem("savedLoadouts")

  let savedLoadouts = JSON.parse(savedLoadoutsJSON)

  return <div>
    {savedLoadouts.map(savedLoadout => {
      console.log('savedLoadout', savedLoadout);
      return (
        <div>
          <ul>
            {savedLoadout.stratagems.map((stratagem) => {
              console.log("stratagem", stratagem);
              return <li>{stratagem.name}</li>;
            })}
          </ul>
          <ul>
            {savedLoadout.armorSet.map((armorPiece) => {
              console.log("armorPiece", armorPiece);
              return <li>{armorPiece.name}</li>;
            })}
          </ul>
          <ul>
            {savedLoadout.equipment.map((equipment) => {
              console.log("equipment", equipment);
              return <li>{equipment.name}</li>;
            })}
          </ul>
          <br />
        </div>
      );
    })}
  </div>;
};

export default SavedLoadouts;
