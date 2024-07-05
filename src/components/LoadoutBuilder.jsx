import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import StratBuilder from "./StratBuilder";
import EquipmentBuilder from "./EquipmentBuilder";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
  const [loadoutName, setLoadoutName] = useState({});

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
            />
            <div className="d-flex flex-column align-items-center w-100">
              <Form.Group className="mb-4 mt-5  w-75">
                <Form.Label>Loadout Name</Form.Label>
                <Form.Control type="text" placeholder="Enter loadout name" />
              </Form.Group>
              <div className="d-flex justify-content-between w-50 mb-3">
                <Button variant="secondary">Reset</Button>
                <Button variant="secondary">Save</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoadoutBuilder;
