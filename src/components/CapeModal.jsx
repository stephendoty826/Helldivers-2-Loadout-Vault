import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DetailsAccordion from "./DetailsAccordion";

function CapeModal({ show, setCape, onHide, capesArray }) {
  const [selected, setSelected] = useState({});

  const equipItem = () => {
    setCape(selected);
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
          Select Cape
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalBigTop">
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {capesArray.map((equipment) => {
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
        equipItem={equipItem}
        selected={selected}
      />
    </Modal>
  );
}

export default CapeModal;
