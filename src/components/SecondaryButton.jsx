import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SecondaryModal from "./SecondaryModal";

const SecondaryButton = ({ secondary, setSecondary, secondaryArray }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="weaponButton"
        onClick={() => setShowModal(true)}
      >
        {secondary.image && (
          <img src={secondary.image} alt="" className="centerWeaponImage" />
        )}
      </Button>
      <SecondaryModal
        secondary={secondary}
        setSecondary={setSecondary}
        show={showModal}
        onHide={() => setShowModal(false)}
        secondaryArray={secondaryArray}
      />
    </>
  );
};

export default SecondaryButton;
