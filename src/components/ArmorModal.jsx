import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DetailsAccordion from "./DetailsAccordion";

function ArmorModal({ show, setArmor, onHide, armorArray}) {
  const [selected, setSelected] = useState({});

  const equipItem = () => {
    setArmor(selected);
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
          Select Armor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalTop">
          <p>Light Armor</p>
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {armorArray.light.map((equipment) => {
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
          <hr />
          <p>Medium Armor</p>
          <div className="d-flex flex-wrap justify-content-between">
            {armorArray.medium.map((equipment) => {
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
          <hr />
          <p>Heavy Armor</p>
          <div className="d-flex flex-wrap justify-content-between">
            {armorArray.heavy.map((equipment) => {
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
        variant="armor"
        equipItem={equipItem}
        selected={selected}
      />
    </Modal>
  );
}

export default ArmorModal;
