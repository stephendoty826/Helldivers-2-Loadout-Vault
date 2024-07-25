import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SavedLoadout from "./SavedLoadout";
import FactionCheckboxes from "./FactionCheckboxes";
import Form from "react-bootstrap/Form";

const SavedLoadouts = () => {
  const [savedLoadouts, setSavedLoadouts] = useState([]);
  const [faction, setFaction] = useState("all");
  const [shownLoadouts, setShownLoadouts] = useState([]);

  useEffect(() => {
    let savedLoadoutsJSON = localStorage.getItem("savedLoadouts");

    if (savedLoadoutsJSON) {
      setSavedLoadouts(JSON.parse(savedLoadoutsJSON));
    }
  }, []);

  useEffect(() => {
    let filteredLoadouts = savedLoadouts.filter((loadout) => {
      if (faction !== "all") {
        return loadout.faction === faction || loadout.faction === "all";
      } else {
        return true;
      }
    });
    setShownLoadouts(filteredLoadouts);
  }, [faction, savedLoadouts]);

  return (
    <div>
      <Container className="savedLoadoutContainer">
        <div className="d-flex align-items-center flex-column vh-85">
          <p className="display-6 mt-3">Saved Loadouts</p>
          <FactionCheckboxes
            id="saved"
            faction={faction}
            setFaction={setFaction}
          />
          <div className="text-center w-100">
            {shownLoadouts.length > 0 ? (
              shownLoadouts.map((savedLoadout) => {
                return (
                  <div key={savedLoadout.id}>
                    <SavedLoadout
                      savedLoadout={savedLoadout}
                      savedLoadouts={savedLoadouts}
                      setSavedLoadouts={setSavedLoadouts}
                    />
                    <br />
                  </div>
                );
              })
            ) : (
              <p>
                {faction === "all"
                  ? "No loadouts saved"
                  : `No loadouts saved for ${faction}`}
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SavedLoadouts;
