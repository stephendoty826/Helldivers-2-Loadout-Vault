import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SelectorModal from "./SelectorModal";

const CapeButton = ({ disabled, cape, setCape, capesArray }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        disabled={disabled}
        variant="secondary"
        className="armorButton selectorBorder"
        onClick={() => setShowModal(true)}
      >
        {cape.image && (
          <img src={cape.image} alt="" className="equippedImageCropBorder" />
        )}
      </Button>
      <SelectorModal
        variant="cape"
        setItem={setCape}
        show={showModal}
        onHide={() => setShowModal(false)}
        itemArray={capesArray}
      />
    </>
  );
};

export default CapeButton;
