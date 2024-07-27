import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import helldivers2 from "../gameData/helldivers2.json"
import MessageModal from "./MessageModal";
import { Link } from "react-router-dom";
import { shuffleArray } from "../misc/utils";

let tipsArray = []

const HomePage = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    getRandomTip();
    checkAndAddFaction();
  }, []);

  function checkAndAddFaction() {
    let savedLoadoutsJSON = localStorage.getItem("savedLoadouts");

    if (savedLoadoutsJSON) {
      let savedLoadouts = JSON.parse(savedLoadoutsJSON);

      //loop through savedLoadouts and check for faction key, if it exists, skip it, if it doesn't add faction: "all"
      savedLoadouts = savedLoadouts.map((loadout) => {
        if (!loadout.faction) {
          loadout.faction = "all";
        }
        return loadout;
      });

      // stringify array
      savedLoadoutsJSON = JSON.stringify(savedLoadouts);
      // save array to local storage
      localStorage.setItem("savedLoadouts", savedLoadoutsJSON);
    }
  }

  function getRandomTip() {
    if(tipsArray.length === 0){
      tipsArray = [...helldivers2["loading screen tips"]]

      shuffleArray(tipsArray);
    }

    let tempTip = tipsArray.pop();

    setTip(tempTip);
  }

  return (
    <div>
      <Container className="mt-3 ">
        <div className="d-flex align-items-center flex-column vh-85">
          <div className="display-1 mb-2">Helldivers 2</div>
          <div className="display-6">Loadout Vault</div>
          <div className="px-5 pt-5 text-center">
            <p className="homePageFont saira-font">
              Welcome, fellow Helldivers
            </p>
            <p className="homePageFont saira-font">
              I am Helldiver Pyro, and Super Earth high command has entrusted me
              with the creation of this loadout vault.
            </p>
            <p className="homePageFont saira-font">
              This vault will allow you to save loadouts as you continue to
              spread Managed Democracy across the galaxy.
            </p>
            <p className="homePageFont saira-font">
              Choose your stratagems, weapons, and armor...for Liberty.
            </p>
          </div>
          <Button
            variant="primary"
            className="mt-4 fs-3"
            as={Link}
            to="/loadout_builder"
          >
            Build Loadout
          </Button>{" "}
          <Button
            variant="secondary"
            className="mt-5 fs-4"
            onClick={getRandomTip}
          >
            Next Tip
          </Button>{" "}
          <div className="text-center mx-3 mt-3 d-flex align-items-center">
            <div className="text-center mx-3 mb-5">{tip}</div>
          </div>
        </div>
      </Container>
      <MessageModal />
    </div>
  );
};

export default HomePage;
