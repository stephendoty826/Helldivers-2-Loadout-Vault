import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SelectorModalStratagem = ({
  otherStratagems,
  show,
  setStratagem,
  onHide,
  stratagemArray,
}) => {
  const [selected, setSelected] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  const equipItem = () => {
    setStratagem(selected);
    setSelected({});
    setShowDetails(false);
    onHide();
  };

  const closeModal = () => {
    setSelected({});
    setShowDetails(false);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal"
      fullscreen="lg-down"
    >
      <Modal.Header closeButton>
        {selected.name ? (
          <div className="d-flex align-items-center" style={{ padding: "0px" }}>
            <img
              src={selected.image}
              alt=""
              className="me-2"
              style={{ height: "5vh" }}
            />
            <div className="d-flex">
              <div className="fs-5">{selected.name?.toUpperCase()}</div>
            </div>
          </div>
        ) : (
          <div
            className="d-flex align-items-center fs-3"
            style={{ height: "5vh" }}
          >
            MAKE SELECTION
          </div>
        )}
      </Modal.Header>
      <Modal.Body style={{ padding: "0px" }}>
        <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
          {keysArray.map((stratagemKey, idx) => {
            return (
              <div key={stratagemKey + idx}>
                <p>{stratagemKey.toUpperCase()}</p>
                <div className="row">
                  {stratagemArray[stratagemKey].map((equipment) => {
                    let isSelected = selected.name === equipment.name;
                    let inOtherStratagems = otherStratagems.includes(equipment.name)
                    return (
                      <div className="col-3" key={equipment.image}>
                        <img
                          className={
                            isSelected
                              ? "selected itemSelector"
                              : inOtherStratagems
                              ? "equipped itemSelector"
                              : "itemSelector"
                          }
                          src={equipment.image}
                          alt=""
                          onClick={() => {!inOtherStratagems && setSelected(equipment)}} // "disables" click when inOtherStratagems is true
                        />
                      </div>
                    );
                  })}
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className={showDetails ? "modalBottom" : "modalBottomClosed"}>
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
                <div className="pt-1">FIRE LIMIT: {selected["fire limit"]}</div>
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
                  {selected.name &&
                    selected["stratagem traits"].map((trait, idx) => {
                      return (
                        <li key={idx} className="pb-1">
                          {trait.toUpperCase()}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <a href={selected.credit} target="_blank" rel="noreferrer">
              Image credit
            </a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer
        className={selected.name ? "d-flex justify-content-between" : ""}
      >
        {selected.name && (
          <Button
            variant="secondary"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide" : "Show"} Details
          </Button>
        )}
        {selected.name ? (
          <Button variant="primary" onClick={equipItem}>
            Equip
          </Button>
        ) : (
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default SelectorModalStratagem;