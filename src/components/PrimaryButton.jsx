import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import PrimaryModal from "./PrimaryModal";

const PrimaryButton = ({
  primary,
  setPrimary,
  primaryArray,
}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="weaponButton"
        onClick={() => setShowModal(true)}
      >
        {primary.image && (
          <img src={primary.image} alt="" className="centerImage" />
        )}
      </Button>
      <PrimaryModal
        primary={primary}
        setPrimary={setPrimary}
        show={showModal}
        onHide={() => setShowModal(false)}
        primaryArray={primaryArray}
      />
    </>
  );
};

export default PrimaryButton;
