import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SelectorModal from "./SelectorModal";

const StratagemButton = ({ stratagem, setStratagem, stratagemArray }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="stratButton"
        onClick={() => setShowModal(true)}
      >
        {stratagem.image && (
          <img src={stratagem.image} alt="" className="stratButton" />
        )}
      </Button>
      <SelectorModal
        variant="stratagem"
        setItem={setStratagem}
        show={showModal}
        onHide={() => setShowModal(false)}
        itemArray={stratagemArray}
      />
    </>
  );
};

export default StratagemButton;
