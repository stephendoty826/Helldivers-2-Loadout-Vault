import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SelectorModal = ({ show, setItem, onHide, itemArray, variant }) => {
  const [selected, setSelected] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  const equipItem = () => {
    setItem(selected);
    setSelected({});
    setShowDetails(false)
    onHide();
  };

  const closeModal = () => {
    setSelected({})
    setShowDetails(false);
    onHide()
  }

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
        {selected.name ? <div className="d-flex align-items-center" style={{padding: "0px"}}>
          <img
            src={selected.image}
            alt=""
            className="me-2"
            style={{ height: "5vh"}}
          />
          <div className="d-flex">
            <div className="fs-5">{selected.name?.toUpperCase()}</div>
          </div>
        </div>
        :
        "MAKE SELECTION"}
      </Modal.Header>
      <Modal.Body style={{ padding: "0px" }}>
        {jsxSwitch(selected, setSelected, showDetails, itemArray, variant)}
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
        {selected.name ? (
          <Button variant="secondary" onClick={equipItem}>
            Equip
          </Button>
        ) : (
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          // <Button variant="secondary" onClick={closeModal}>
          //   Close
          // </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default SelectorModal;

//********* */

const jsxSwitch = (selected, setSelected, showDetails, itemArray, variant) => {
  switch (variant) {
    case "stratagem":
      return stratagemJSX(selected, setSelected, showDetails, itemArray);
    case "helmet":
      return helmetJSX(selected, setSelected, showDetails, itemArray);
    case "armor":
      return armorJSX(selected, setSelected, showDetails, itemArray);
    case "cape":
      return capeJSX(selected, setSelected, showDetails, itemArray);
    case "primary":
      return primaryJSX(selected, setSelected, showDetails, itemArray);
    case "secondary":
      return secondaryJSX(selected, setSelected, showDetails, itemArray);
    case "throwable":
      return throwableJSX(selected, setSelected, showDetails, itemArray);
  }
};

const stratagemJSX = (selected, setSelected, showDetails, itemArray) => {
  return (
    <>
      <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
        <p>Offensive</p>
        <div className="col-12 d-flex flex-wrap justify-content-between">
          {itemArray.offensive.map((stratagem) => {
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
          {itemArray.supply.map((stratagem) => {
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
          {itemArray.defensive.map((stratagem) => {
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
      <div className={showDetails ? "modalBottom" : "modalBottomClosed"}>
        <div>{selected.description}</div>
        <div className="mt-2">
          <div className="mx-2 fs-5">STATS</div>
          <div className="px-2 infoBox">
            <div className="pt-1">CALL-IN TIME: {selected["call-in time"]}</div>
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
              <div className="pt-1">RELOAD TIME: {selected["reload time"]}</div>
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
        </div>
      </div>
    </>
  );
};

const helmetJSX = (selected, setSelected, showDetails, itemArray) => {
  return (
    <>
      <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
        <div className="col-12 d-flex flex-wrap justify-content-between">
          {itemArray.map((equipment) => {
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
        <div>{selected.description}</div>
        <div className="mt-2">
          <div className="mx-2 fs-5">STATS</div>
          <div className="px-2 infoBox">
            <div className="pt-1">ARMOR RATING: {selected["armor rating"]}</div>
            <div className="pt-1">SPEED: {selected.speed}</div>
            <div className="py-1">
              STAMINA REGEN: {selected["stamina regen"]}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="px-2 infoBox">
            <div className="pt-1">STANDARD ISSUE</div>
            <div className="py-1 ">No additional bonus</div>
          </div>
        </div>
      </div>
    </>
  );
};

const armorJSX = (selected, setSelected, showDetails, itemArray) => {
  return (
    <>
      <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
        <p>Light Armor</p>
        <div className="col-12 d-flex flex-wrap justify-content-between">
          {itemArray.light.map((equipment) => {
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
          {itemArray.medium.map((equipment) => {
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
          {itemArray.heavy.map((equipment) => {
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
        <div>{selected.description}</div>
        <div className="mt-2">
          <div className="mx-2 fs-5">STATS</div>
          <div className="px-2 infoBox">
            <div className="pt-1">ARMOR RATING: {selected["armor rating"]}</div>
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
              {selected["armor passive"]?.name.toUpperCase()}
            </div>
            <div className="py-1 ">
              {selected["armor passive"]?.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const capeJSX = (selected, setSelected, showDetails, itemArray) => {
  return (
    <>
      <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
        <div className="col-12 d-flex flex-wrap justify-content-between">
          {itemArray.map((equipment) => {
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
        <div>{selected.description}</div>
      </div>
    </>
  );
};

const primaryJSX = (selected, setSelected, showDetails, itemArray) => {
  return (
    <>
      <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
        <p>Assault Rifles</p>
        <div className="col-12 d-flex flex-wrap justify-content-between">
          {itemArray["Assault Rifle"].map((equipment) => {
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
          {itemArray["Marksman Rifle"].map((equipment) => {
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
          {itemArray["Submachine Gun"].map((equipment) => {
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
          {itemArray.Shotgun.map((equipment) => {
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
          {itemArray.Explosive.map((equipment) => {
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
          {itemArray["Energy-Based"].map((equipment) => {
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
      </div>
    </>
  );
};

const secondaryJSX = (selected, setSelected, showDetails, itemArray) => {
  return (
    <>
      <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
        <p>Shotgun</p>
        <div className="col-12 d-flex flex-wrap justify-content-between">
          {itemArray.Shotgun.map((equipment) => {
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
        <p>Pistol</p>
        <div className="d-flex flex-wrap justify-content-between">
          {itemArray.Pistol.map((equipment) => {
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
      </div>
    </>
  );
};

const throwableJSX = (selected, setSelected, showDetails, itemArray) => {
  return (
    <>
      <div className={showDetails ? "modalTopWithDetails" : "modalTop"}>
        <p>Standard Throwables</p>
        <div className="col-12 d-flex flex-wrap justify-content-between">
          {itemArray["Standard Throwables"].map((equipment) => {
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
          {itemArray["Special Throwables"].map((equipment) => {
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
        <div>{selected.description}</div>
        <div className="mt-2">
          <div className="mx-2 fs-5">STATS</div>
          <div className="px-2 infoBox">
            <div className="pt-1">DAMAGE: {selected.damage}</div>
            <div className="pt-1">PENETRATION: {selected.penetration}</div>
            {selected.outer_radius && (
              <div className="pt-1">OUTER RADIUS: {selected.outer_radius}</div>
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
      </div>
    </>
  );
};
