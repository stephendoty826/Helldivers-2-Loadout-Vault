import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SavedLoadout from "./SavedLoadout";

const SavedLoadouts = () => {

  const [savedLoadouts, setSavedLoadouts] = useState([]);

  useEffect(() => {
    let savedLoadoutsJSON = localStorage.getItem("savedLoadouts");

    if (savedLoadoutsJSON) {
      setSavedLoadouts(JSON.parse(savedLoadoutsJSON));
    }
  }, []);

  return (
    <div>
      <Container className="savedLoadoutContainer">
        <div className="d-flex align-items-center flex-column vh-85">
          <p className="display-6 mt-3">Saved Loadouts</p>
          <div className="text-center w-100">
            {savedLoadouts.length > 0 ? savedLoadouts.map((savedLoadout) => {
              return (
                <div key={savedLoadout.id}>
                  <SavedLoadout savedLoadout={savedLoadout} savedLoadouts={savedLoadouts} setSavedLoadouts={setSavedLoadouts}/>
                  <br />
                </div>
              );
            })
            :
            <p>No loadouts saved</p>}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SavedLoadouts;
