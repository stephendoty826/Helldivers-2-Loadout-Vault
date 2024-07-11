import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import StratBuilder from "./StratBuilder";
import EquipmentBuilder from "./EquipmentBuilder";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";

const LoadoutBuilder = () => {
  const [stratagem1, setStratagem1] = useState({});
  const [stratagem2, setStratagem2] = useState({});
  const [stratagem3, setStratagem3] = useState({});
  const [stratagem4, setStratagem4] = useState({});
  const [armor, setArmor] = useState({});
  const [helmet, setHelmet] = useState({});
  const [cape, setCape] = useState({});
  const [primary, setPrimary] = useState({});
  const [secondary, setSecondary] = useState({});
  const [throwable, setThrowable] = useState({});
  const [loadoutName, setLoadoutName] = useState("");
  const [savedLoadouts, setSavedLoadouts] = useState([]);

  useEffect(() => {
    let savedLoadoutsJSON = localStorage.getItem("savedLoadouts");

    if (savedLoadoutsJSON) {
      setSavedLoadouts(JSON.parse(savedLoadoutsJSON));
    }
  }, []);

  const resetLoadout = () => {
    setStratagem1({});
    setStratagem2({});
    setStratagem3({});
    setStratagem4({});
    setArmor({});
    setHelmet({});
    setCape({});
    setPrimary({});
    setSecondary({});
    setThrowable({});
    setLoadoutName("");
  };

  const saveLoadout = () => {
    let isLoadoutFilled =
      stratagem1.name &&
      stratagem2.name &&
      stratagem3.name &&
      stratagem4.name &&
      armor.name &&
      helmet.name &&
      cape.name &&
      primary.name &&
      secondary.name &&
      throwable.name &&
      loadoutName;

    if (isLoadoutFilled) {
      let loadout = {
        loadoutName,
        stratagems: [stratagem1, stratagem2, stratagem3, stratagem4],
        armorSet: [armor, helmet, cape],
        equipment: [primary, secondary, throwable],
        id: uuidv4(),
      };

      // using temp array to ensure latest savedloadouts are saved to localStorage
      let tempSavedLoadouts = savedLoadouts;

      tempSavedLoadouts.push(loadout);
      // use setSavedLoadouts to update state
      setSavedLoadouts(tempSavedLoadouts);
      // stringify array
      let savedLoadoutsJSON = JSON.stringify(tempSavedLoadouts);
      // save array to local storage
      localStorage.setItem("savedLoadouts", savedLoadoutsJSON);

      resetLoadout();
    } else {
      alert(
        "The current loadout seems to be missing a stratagem, piece of equipment or a name. Ensure the loadout is complete before saving."
      );
    }
  };

  return (
    <div>
      <Container>
        <div className="d-flex align-items-center flex-column vh-85">
          <p className="display-6 mt-3">Loadout Builder</p>
          <div className="text-center w-100">
            <StratBuilder
              stratagem1={stratagem1}
              setStratagem1={setStratagem1}
              stratagem2={stratagem2}
              setStratagem2={setStratagem2}
              stratagem3={stratagem3}
              setStratagem3={setStratagem3}
              stratagem4={stratagem4}
              setStratagem4={setStratagem4}
            />
            <EquipmentBuilder
              armor={armor}
              setArmor={setArmor}
              helmet={helmet}
              setHelmet={setHelmet}
              cape={cape}
              setCape={setCape}
              primary={primary}
              setPrimary={setPrimary}
              secondary={secondary}
              setSecondary={setSecondary}
              throwable={throwable}
              setThrowable={setThrowable}
            />
            <div className="d-flex flex-column align-items-center w-100">
              <Form.Group className="mb-4 mt-5  w-75">
                <Form.Label>Loadout Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setLoadoutName(e.target.value)}
                  value={loadoutName}
                  placeholder="Enter loadout name"
                />
              </Form.Group>
              <div className="d-flex justify-content-between w-50 mb-3">
                <Button variant="secondary" onClick={resetLoadout}>
                  Reset
                </Button>
                <Button variant="primary" onClick={saveLoadout}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoadoutBuilder;
