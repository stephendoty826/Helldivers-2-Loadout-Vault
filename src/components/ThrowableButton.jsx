import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ThrowableModal from "./ThrowableModal";

const ThrowableButton = ({ throwable, setThrowable, throwableArray }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="weaponButton"
        onClick={() => setShowModal(true)}
      >
        {throwable.image && (
          <img src={throwable.image} alt="" className="centerThrowableImage" />
        )}
      </Button>
      <ThrowableModal
        throwable={throwable}
        setThrowable={setThrowable}
        show={showModal}
        onHide={() => setShowModal(false)}
        throwableArray={throwableArray}
      />
    </>
  );
};

export default ThrowableButton;
