import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SelectorModal from "./SelectorModal";

const StratagemButton = ({
  disabled,
  otherStratagems,
  stratagem,
  setStratagem,
  stratagemArray,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="stratButton"
        onClick={() => setShowModal(true)}
        disabled={disabled}
      >
        {stratagem.image && (
          <img src={stratagem.image} alt="" className="equippedImage" />
        )}
      </Button>
      <SelectorModal
        variant="stratagem"
        otherStratagems={otherStratagems}
        setItem={setStratagem}
        show={showModal}
        onHide={() => setShowModal(false)}
        itemArray={stratagemArray}
      />
    </>
  );
};

export default StratagemButton;
