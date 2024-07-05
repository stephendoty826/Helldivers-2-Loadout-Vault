import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import CapeModal from "./CapeModal";

const CapeButton = ({
  cape,
  setCape,
  capesArray,
}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="armorButton"
        onClick={() => setShowModal(true)}
      >
        {cape.image && (
          <img src={cape.image} alt="" className="armorButton" />
        )}
      </Button>
      <CapeModal
        cape={cape}
        setCape={setCape}
        show={showModal}
        onHide={() => setShowModal(false)}
        capesArray={capesArray}
      />
    </>
  );
};

export default CapeButton;
