import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function HelmetAndCapeModal({ show, setHelmet, onHide, helmetArray }) {
  const [selected, setSelected] = useState({});

  const equipItem = () => {
    setHelmet(selected);
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
      <Modal.Body>
        <div className="modalTop">
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
        <hr />
        <div className="modalBottom">
          {selected.name ? (
            <>
              <div className="fs-5">{selected.name?.toUpperCase()}</div>
              <div>{selected.description}</div>
              <div className="mt-2">
                <div className="mx-2 fs-5">STATS</div>
                <div className="px-2 infoBox">
                  <div className="pt-1">
                    ARMOR RATING: {selected["armor rating"]}
                  </div>
                  <div className="pt-1">SPEED: {selected.speed}</div>
                  <div className="py-1">
                    STAMINA REGEN: {selected["stamina regen"]}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="px-2 infoBox">
                  <div className="pt-1">
                    STANDARD ISSUE
                  </div>
                  <div className="py-1 ">
                    No additional bonus
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="fs-1">Select item to view its stats</div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={equipItem}>
          {selected.name ? "Equip" : "Close"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HelmetAndCapeModal;
