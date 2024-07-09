import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DetailsAccordion from "./DetailsAccordion";

function PrimaryModal({ show, setPrimary, onHide, primaryArray }) {
  const [selected, setSelected] = useState({});

  const equipItem = () => {
    setPrimary(selected);
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
          Select Primary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalTop">
        <div>
          <p>Assault Rifles</p>
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {primaryArray["Assault Rifle"].map((equipment) => {
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
          <p>Marksman Rifles</p>
          <div className="d-flex flex-wrap justify-content-between">
            {primaryArray["Marksman Rifle"].map((equipment) => {
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
          <p>Submachine Guns</p>
          <div className="d-flex flex-wrap justify-content-between">
            {primaryArray["Submachine Gun"].map((equipment) => {
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
          <p>Shotguns</p>
          <div className="d-flex flex-wrap justify-content-between">
            {primaryArray.Shotgun.map((equipment) => {
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
          <p>Explosive</p>
          <div className="d-flex flex-wrap justify-content-between">
            {primaryArray.Explosive.map((equipment) => {
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
          <p>Energy-Based</p>
          <div className="d-flex flex-wrap justify-content-between">
            {primaryArray["Energy-Based"].map((equipment) => {
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
        variant="primary"
        equipItem={equipItem}
        selected={selected}
      />
    </Modal>
  );
}

export default PrimaryModal;
