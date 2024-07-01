import React from "react";
import Container from "react-bootstrap/Container";
import StratBuilder from "./StratBuilder";
import EquipmentBuilder from "./EquipmentBuilder";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import helldivers2 from "../gameData/helldivers2test.json";

const LoadoutBuilder = () => {
  return (
    <div>
      <Container className="">
        <div className="d-flex align-items-center flex-column vh-85 equipmentStratContainer">
          <p className="display-6 mt-3">Loadout Builder</p>
          <div className="text-center w-100">
            <StratBuilder />
            <EquipmentBuilder />
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
