import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import helldivers2 from "../gameData/helldivers2.json";

const HomePage = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    getRandomTip()
  }, [])

  function getRandomTip() {
    let tipsArray = helldivers2["loading screen tips"];

    let tempTip = tipsArray[(tipsArray.length * Math.random()) | 0];

    setTip(tempTip);
  }

  return (
    <div>
      <Container className="mt-5">
        <div className="d-flex align-items-center flex-column vh-90">
          <text className="display-1 mb-3">Helldivers 2</text>
          <text className="display-6">Loadout Vault</text>
          <div className="px-4 pt-5 text-center">
            <p className="fs-5">Welcome, fellow Helldivers</p>
            <p className="fs-5">
              I am Hell Commander Pyro and Super Earth high command has
              entrusted me with the creation of this loadout vault.
            </p>
            <p className="fs-5">
              This vault will allow you to save loadouts as you continue to
              spread Managed Democracy across the galaxy.
            </p>
            <p className="fs-5">
              Choose your stratagems, weapons, and armor...for Liberty.
            </p>
          </div>
          <Button variant="secondary" className="my-5 fs-1">
            Build Loadout
          </Button>{" "}
          <div className="text-center mx-3 h-100 d-flex align-items-center">
            <text className="text-center mx-3">{tip}</text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
