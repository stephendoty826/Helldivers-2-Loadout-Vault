import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SavedLoadout from "./SavedLoadout";
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
          <div className="mb-4">
            <Form.Check
              inline
              type="radio"
              id="allSaved"
              label="All"
              value="all"
              checked={faction === "all"}
              onChange={(e) => {
                setFaction(e.target.value);
              }}
            />
            <Form.Check
              inline
              type="radio"
              id="bugsSaved"
              label="Bugs"
              className="me-3"
              value="bugs"
              checked={faction === "bugs"}
              onChange={(e) => {
                setFaction(e.target.value);
              }}
            />
            <Form.Check
              inline
              type="radio"
              id="botsSaved"
              label="Bots"
              className="me-3"
              value="bots"
              checked={faction === "bots"}
              onChange={(e) => {
                setFaction(e.target.value);
              }}
            />
          </div>
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
