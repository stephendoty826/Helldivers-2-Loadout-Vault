import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ArmorModalButton from "./ArmorModalButton";
import helldivers2Data from "../gameData/helldivers2.json";

const EquipmentBuilder = () => {

  const [showModal, setShowModal] = useState(false);

  let itemsArray = helldivers2Data.armor

  return (
    <div className="mt-5">
      <label className="h3">Equipment</label>
      <div className="d-flex justify-content-around mt-3">
        <div className="d-flex flex-column">
          <Form.Label>Armor</Form.Label>
          <ArmorModalButton
            showModal={showModal}
            setShowModal={setShowModal}
            itemsArray={itemsArray}
          />
        </div>
        <div className="d-flex flex-column">
          <Form.Label>Helmet</Form.Label>
          <Button variant="secondary" className="armorButton"></Button>
        </div>
        <div className="d-flex flex-column">
          <Form.Label>Cape</Form.Label>
          <Button variant="secondary" className="armorButton"></Button>
        </div>
      </div>
      <div className="d-flex justify-content-around mt-3">
        <div className="d-flex flex-column align-items-center">
          <Form.Label>Primary</Form.Label>
          <Button variant="secondary" className="weaponButton"></Button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Form.Label>Secondary</Form.Label>
          <Button variant="secondary" className="weaponButton"></Button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Form.Label>Throwable</Form.Label>
          <Button variant="secondary" className="weaponButton"></Button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentBuilder;
