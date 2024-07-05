import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PrimaryModal({ show, setPrimary, onHide, primaryArray}) {
  const [selected, setSelected] = useState({});

  console.log(primaryArray)

  const equipItem = () => {
    setPrimary(selected);
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
      <Modal.Body>
        <div className="modalTop">
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
        <hr />
        <div className="modalBottom">
          {selected.name ? (
            <>
              <div className="fs-5">{selected.name?.toUpperCase()}</div>
              <div>{selected.description}</div>
              <div className="mt-2">
                <div className="mx-2 fs-5">STATS</div>
                <div className="px-2 infoBox">
                  <div className="pt-1">DAMAGE: {selected.damage}</div>
                  <div className="pt-1">CAPACITY: {selected.capacity}</div>
                  <div className="py-1">RECOIL: {selected.recoil}</div>
                </div>
              </div>
              <div className="mt-2">
                  {selected["weapon traits"] && <div>
                    <div className="mx-2 fs-5">WEAPON TRAITS</div>
                    <div className="px-2 infoBox">
                      <div className="pt-1">
                        <ul>
                          {selected["weapon traits"].map((trait, idx) => {
                            return <li key={idx} className="pb-1">{trait.toUpperCase()}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>}
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

export default PrimaryModal;
