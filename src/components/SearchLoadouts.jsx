import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchLoadouts = ({ shownLoadouts, setSearchedLoadouts }) => {
  const [searchTerms, setSearchTerms] = useState("");

  function filterLoadouts() {
    let resultsArray = []
    let remainderArray = []

    // loops through shownLoadouts and puts matched loadouts in resultsArray
    shownLoadouts.forEach(loadout => {
      let name = loadout.loadoutName.toLowerCase(); // takes name from loadout and makes it lowercase
      if(name.includes(searchTerms)){ // checks if name includes search terms
        resultsArray.push(loadout) 
      }else{
        remainderArray.push(loadout)
      }
    })

    // loops through remainderArray and match any stratagem, helmet, armor, cape, primary, secondary, or throwable name to searchTerms and puts them in resultsArray
    remainderArray.forEach(loadout => {
      let boolFlag = false;
      loadout.stratagems.forEach(stratagem => {
        if(stratagem.name.toLowerCase()?.includes(searchTerms)){
          boolFlag = true
        }
      })
      loadout.armorSet.forEach(armor => {
        if(armor.name.toLowerCase()?.includes(searchTerms)){
          boolFlag = true
        }
      })
      loadout.equipment.forEach(equipment => {
        if(equipment.name.toLowerCase()?.includes(searchTerms)){
          boolFlag = true
        }
      }) 
      if(boolFlag){
        resultsArray.push(loadout)
      }
    })

    setSearchedLoadouts(resultsArray)

  }

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      filterLoadouts();
    }
  };

  return (
    <div className="d-flex pb-3">
      <Form.Control
        type="text"
        placeholder="Search Loadouts"
        onChange={(e) => setSearchTerms(e.target.value)}
        value={searchTerms}
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <Button className="ms-2" onClick={filterLoadouts}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </div>
  );
};

export default SearchLoadouts;
