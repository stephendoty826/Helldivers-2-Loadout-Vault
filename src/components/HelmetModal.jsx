import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DetailsAccordion from "./DetailsAccordion";

function HelmetModal({ show, setHelmet, onHide, helmetArray }) {
  const [selected, setSelected] = useState({});

  const equipItem = () => {
    setHelmet(selected);
    setSelected({});
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal"
      fullscreen="lg-down"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Helmet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalTop">
        <div>
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {helmetArray.map((equipment) => {
              let isSelected = selected.name === equipment.name;
              return (
                <img
                  className={
                    isSelected ? "selected itemSelector" : "itemSelector"
                  }
                  src={equipment.image}
                  key={equipment.image}
                  alt=""
                  onClick={() => setSelected(equipment)}
                />
              );
            })}
          </div>
        </div>
      </Modal.Body>
      <DetailsAccordion
        variant="helmet"
        equipItem={equipItem}
        selected={selected}
      />
    </Modal>
  );
}

export default HelmetModal;
