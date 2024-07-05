import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import StratagemModal from "./StratagemModal";

const StratagemButton = ({
  stratagem,
  setStratagem,
  stratagemArray,
}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="armorButton"
        onClick={() => setShowModal(true)}
      >
        {stratagem.image && (
          <img src={stratagem.image} alt="" className="armorButton" />
        )}
      </Button>
      <StratagemModal
        stratagem={stratagem}
        setStratagem={setStratagem}
        show={showModal}
        onHide={() => setShowModal(false)}
        stratagemArray={stratagemArray}
      />
    </>
  );
};

export default StratagemButton;
