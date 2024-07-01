import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EquipmentBuilder = () => {
  return (
    <div className="mt-5">
      <label className="h3">Equipment</label>
      <div className="d-flex justify-content-around mt-3">
        <div class="d-flex flex-column">
          <Form.Label>Armor</Form.Label>
          <Button variant="secondary" className="equipmentButton"></Button>
        </div>
        <div class="d-flex flex-column">
          <Form.Label>Helmet</Form.Label>
          <Button variant="secondary" className="equipmentButton"></Button>
        </div>
        <div class="d-flex flex-column">
          <Form.Label>Cape</Form.Label>
          <Button variant="secondary" className="equipmentButton"></Button>
        </div>
      </div>
      <div className="d-flex justify-content-around mt-3">
        <div class="d-flex flex-column">
          <Form.Label>Primary</Form.Label>
          <Button variant="secondary" className="equipmentButton"></Button>
        </div>
        <div class="d-flex flex-column">
          <Form.Label>Secondary</Form.Label>
          <Button variant="secondary" className="equipmentButton"></Button>
        </div>
        <div class="d-flex flex-column">
          <Form.Label>Throwable</Form.Label>
          <Button variant="secondary" className="equipmentButton"></Button>
        </div>

      </div>
    </div>
  );
};

export default EquipmentBuilder;
