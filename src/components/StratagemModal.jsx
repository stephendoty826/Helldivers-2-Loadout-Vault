import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DetailsAccordion from "./DetailsAccordion";

function StratagemModal({ show, setStratagem, onHide, stratagemArray }) {
  const [selected, setSelected] = useState({});

  const equipItem = () => {
    setStratagem(selected);
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
          Select Stratagem
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalTop">
        <div>
          <p>Offensive</p>
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {stratagemArray.offensive.map((stratagem) => {
              let isSelected = selected.name === stratagem.name;

              return (
                <img
                  className={
                    isSelected ? "selected itemSelector" : "itemSelector"
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
          <p>Supply</p>
          <div className="d-flex flex-wrap justify-content-between">
            {stratagemArray.supply.map((stratagem) => {
              let isSelected = selected.name === stratagem.name;
              return (
                <img
                  className={
                    isSelected ? "selected itemSelector" : "itemSelector"
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
          <p>Defensive</p>
          <div className="d-flex flex-wrap justify-content-between">
            {stratagemArray.defensive.map((stratagem) => {
              let isSelected = selected.name === stratagem.name;
              return (
                <img
                  className={
                    isSelected ? "selected itemSelector" : "itemSelector"
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
        <div className="modalBottom">
          {selected.name ? (
            <>
              <div className="fs-5">{selected.name?.toUpperCase()}</div>
              <div>{selected.description}</div>
              <div className="mt-2">
                <div className="mx-2 fs-5">STATS</div>
                <div className="px-2 infoBox">
                  <div className="pt-1">
                    CALL-IN TIME: {selected["call-in time"]}
                  </div>
                  <div className="pt-1">USES: {selected.uses}</div>
                  {selected.capacity && (
                    <div className="pt-1">CAPACITY: {selected.capacity}</div>
                  )}
                  {selected["fire rate"] && (
                    <div className="pt-1">
                      FIRE RATE (RPM): {selected["fire rate"]}
                    </div>
                  )}
                  {selected["fire limit"] && (
                    <div className="pt-1">
                      FIRE LIMIT: {selected["fire limit"]}
                    </div>
                  )}
                  {selected["spare magazines"] && (
                    <div className="pt-1">
                      SPARE MAGAZINES: {selected["spare magazines"]}
                    </div>
                  )}
                  {selected["reload time"] && (
                    <div className="pt-1">
                      RELOAD TIME: {selected["reload time"]}
                    </div>
                  )}
                  {selected["tactical reload"] && (
                    <div className="pt-1">
                      TACTICAL RELOAD: {selected["tactical reload"]}
                    </div>
                  )}
                  <div className="py-1">
                    COOLDOWN TIME: {selected["cooldown time"]}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="mx-2 fs-5">STRATAGEM TRAITS</div>
                <div className="px-2 infoBox">
                  <div className="pt-1">
                    <ul>
                      {selected["stratagem traits"].map((trait, idx) => {
                        return (
                          <li key={idx} className="pb-1">
                            {trait.toUpperCase()}
                          </li>
                        );
                      })}
                    </ul>
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
        {selected.name ? (

          <Button variant="secondary" onClick={equipItem}>
            Equip
          </Button>
        ) : (
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        )}
      </Modal.Footer>
      <DetailsAccordion equipItem={equipItem} selected={selected}/>
    </Modal>
  );
}

export default StratagemModal;
