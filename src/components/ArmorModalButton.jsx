import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import ArmorModal from "./ArmorModal";

const ArmorModalButton = ({
  armor,
  setArmor,
  armorArray,
}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <img src={image} alt="" /> */}
      <Button
        variant="secondary"
        className="armorButton"
        onClick={() => setShowModal(true)}
      >
        {armor.image && (
          <img src={armor.image} alt="" className="armorButton" />
        )}
      </Button>
      <ArmorModal
        armor={armor}
        setArmor={setArmor}
        show={showModal}
        onHide={() => setShowModal(false)}
        armorArray={armorArray}
      />
    </>
  );
};

export default ArmorModalButton;
