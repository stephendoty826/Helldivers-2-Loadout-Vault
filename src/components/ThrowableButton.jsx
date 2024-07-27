import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SelectorModal from "./SelectorModal";

const ThrowableButton = ({ disabled, throwable, setThrowable, throwableArray }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        disabled={disabled}
        variant="secondary"
        className="weaponButton selectorBorder"
        onClick={() => setShowModal(true)}
      >
        {throwable.image && (
          <img src={throwable.image} alt="" className="centerThrowableImage" />
        )}
      </Button>
      <SelectorModal
        variant="throwable"
        setItem={setThrowable}
        show={showModal}
        onHide={() => setShowModal(false)}
        itemArray={throwableArray}
      />
    </>
  );
};

export default ThrowableButton;
