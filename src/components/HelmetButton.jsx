import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import HelmetModal from "./HelmetModal";

const HelmetButton = ({
  helmet,
  setHelmet,
  helmetArray,
}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="armorButton"
        onClick={() => setShowModal(true)}
      >
        {helmet.image && (
          <img src={helmet.image} alt="" className="armorButton" />
        )}
      </Button>
      <HelmetModal
        helmet={helmet}
        setHelmet={setHelmet}
        show={showModal}
        onHide={() => setShowModal(false)}
        helmetArray={helmetArray}
      />
    </>
  );
};

export default HelmetButton;
