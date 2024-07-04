import React from "react";
import Button from "react-bootstrap/Button";
import EquipmentModal from "./EquipmentModal";

const ArmorModalButton = ({
  // image,
  showModal,
  setShowModal,
  itemsArray,
}) => {
  return (
    <>
      {/* <img src={image} alt="" /> */}
      <Button
        variant="secondary"
        className="armorButton"
        onClick={() => setShowModal(true)}
      ></Button>
      <EquipmentModal
        show={showModal}
        onHide={() => setShowModal(false)}
        itemsArray={itemsArray}
      />
    </>
  );
};

export default ArmorModalButton;
