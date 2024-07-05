import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import SecondaryModal from "./SecondaryModal";

const SecondaryButton = ({
  primary,
  setSecondary,
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
      <SecondaryModal
        primary={primary}
        setSecondary={setSecondary}
        show={showModal}
        onHide={() => setShowModal(false)}
        primaryArray={primaryArray}
      />
    </>
  );
};

export default SecondaryButton;
