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
        return faction === loadout.faction;
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
              id="all"
              label="All"
              checked={faction === "all"}
              onChange={() => {
                setFaction("all");
              }}
            />
            <Form.Check
              inline
              type="radio"
              id="bugs"
              label="Bugs"
              className="me-3"
              checked={faction === "bugs"}
              onChange={() => {
                setFaction("bugs");
              }}
            />
            <Form.Check
              inline
              type="radio"
              id="bots"
              label="Bots"
              className="me-3"
              checked={faction === "bots"}
              onChange={() => {
                setFaction("bots");
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
              <p>{(faction === "all") ? "No loadouts saved" : `No loadouts saved for ${faction}`}</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SavedLoadouts;
