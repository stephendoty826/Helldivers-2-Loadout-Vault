import React from "react";
import Container from "react-bootstrap/Container";
import SavedLoadout from "./SavedLoadout";

const SavedLoadouts = () => {

  let savedLoadoutsJSON = localStorage.getItem("savedLoadouts")

  let savedLoadouts = JSON.parse(savedLoadoutsJSON)

  return (
    <div>
      <Container>
        <div className="d-flex align-items-center flex-column vh-85">
          <p className="display-6 mt-3">Saved Loadouts</p>
          <div className="text-center w-100">
            <SavedLoadout />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SavedLoadouts;
