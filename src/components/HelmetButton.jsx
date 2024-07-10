import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import SelectorModal from "./SelectorModal";

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
      <SelectorModal
        variant="helmet"
        setItem={setHelmet}
        show={showModal}
        onHide={() => setShowModal(false)}
        itemArray={helmetArray}
      />
    </>
  );
};

export default HelmetButton;
