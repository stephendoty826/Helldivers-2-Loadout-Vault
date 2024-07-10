import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ThrowableModal({ show, setThrowable, onHide, throwableArray}) {
  const [selected, setSelected] = useState({});
  const [showDetails, setShowDetails] = useState(false)

  const equipItem = () => {
    setThrowable(selected);
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
          Select Throwable
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "0px" }}>
        <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
          <p>Standard Throwables</p>
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {throwableArray["Standard Throwables"].map((equipment) => {
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
          <p>Special Throwables</p>
          <div className="d-flex flex-wrap justify-content-between">
            {throwableArray["Special Throwables"].map((equipment) => {
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
        <div className={showDetails ? "modalBottom" : "modalBottomClosed"}>
          <>
            <div className="fs-5">{selected.name?.toUpperCase()}</div>
            <div>{selected.description}</div>
            <div className="mt-2">
              <div className="mx-2 fs-5">STATS</div>
              <div className="px-2 infoBox">
                <div className="pt-1">DAMAGE: {selected.damage}</div>
                <div className="pt-1">PENETRATION: {selected.penetration}</div>
                {selected.outer_radius && (
                  <div className="pt-1">
                    OUTER RADIUS: {selected.outer_radius}
                  </div>
                )}
                {selected.fuse_time && (
                  <div className="py-1">FUSE TIME: {selected.fuse_time}</div>
                )}
              </div>
            </div>
            <div className="mt-2">
              {selected["weapon traits"] && (
                <div>
                  <div className="mx-2 fs-5">WEAPON TRAITS</div>
                  <div className="px-2 infoBox">
                    <div className="pt-1">
                      <ul>
                        {selected["weapon traits"].map((trait, idx) => {
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
              )}
            </div>
          </>
        </div>
      </Modal.Body>
      <Modal.Footer
        className={selected.name ? "d-flex justify-content-between" : ""}
      >
        {selected.name && (
          <Button
            variant="primary"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide" : "Show"} Details
          </Button>
        )}
        <Button variant="secondary" onClick={equipItem}>
          {selected.name ? "Equip" : "Close"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThrowableModal;
