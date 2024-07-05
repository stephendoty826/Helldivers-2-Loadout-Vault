import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StratagemModal({ show, setStratagem, onHide, stratagemArray }) {
  const [selected, setSelected] = useState({});

  const equipItem = () => {
    setStratagem(selected);
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
          Select Stratagem
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalTop">
          <p>Light Armor</p>
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {stratagemArray.offensive.map((stratagem) => {
              let isSelected = selected.name === stratagem.name;
              return (
                <img
                  className={
                    isSelected ? "selected armorSelector" : "armorSelector"
                  }
                  src={stratagem.image}
                  key={stratagem.image}
                  alt=""
                  onClick={() => setSelected(stratagem)}
                />
              );
            })}
          </div>
          <hr />
          <p>Medium Armor</p>
          <div className="d-flex flex-wrap justify-content-between">
            {stratagemArray.supply.map((stratagem) => {
              let isSelected = selected.name === stratagem.name;
              return (
                <img
                  className={
                    isSelected ? "selected armorSelector" : "armorSelector"
                  }
                  src={stratagem.image}
                  key={stratagem.image}
                  alt=""
                  onClick={() => setSelected(stratagem)}
                />
              );
            })}
          </div>
          <hr />
          <p>Heavy Armor</p>
          <div className="d-flex flex-wrap justify-content-between">
            {stratagemArray.offensive.map((stratagem) => {
              let isSelected = selected.name === stratagem.name;
              return (
                <img
                  className={
                    isSelected ? "selected armorSelector" : "armorSelector"
                  }
                  src={stratagem.image}
                  key={stratagem.image}
                  alt=""
                  onClick={() => setSelected(stratagem)}
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
                <div className="mx-2 fs-5">ARMOR PASSIVE</div>
                <div className="px-2 infoBox">
                  <div className="pt-1">
                    {selected["armor passive"].name.toUpperCase()}
                  </div>
                  <div className="py-1 ">
                    {selected["armor passive"].description}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="fs-1">Select armor to view its stats</div>
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

export default StratagemModal;
