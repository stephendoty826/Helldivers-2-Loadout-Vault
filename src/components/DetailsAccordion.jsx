import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DetailsAccordion = ({ equipItem, selected, variant }) => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Accordion activeKey={activeKey} flush>
      <Card className="accordion-item" style={{ backgroundColor: "#3b4249" }}>
        <Card.Header className="d-flex justify-content-between">
          <Button
            onClick={() => toggleAccordion("0")}
            aria-expanded={activeKey === "0"}
          >
            {activeKey === "0" ? "Hide Details" : "Show Details"}
          </Button>
          <Button variant="secondary" onClick={equipItem}>
            {selected.name ? "Equip" : "Close"}
          </Button>
        </Card.Header>
        <Accordion.Collapse
          eventKey="0"
          className={activeKey === "0" ? "show" : ""}
        >
          <Card.Body className="accordion-body">
            <div className="modalBottom">
              {selected.name ? (
                <>
                  <div className="d-flex">
                    <img
                      src={selected.image}
                      alt=""
                      className="me-2"
                      style={{ height: "5vh" }}
                    />
                    <div className="d-flex align-items-center">
                      <div className="fs-5">{selected.name?.toUpperCase()}</div>
                    </div>
                  </div>
                  <div>{selected.description}</div>
                  {jsxSwitch(selected, variant)}
                </>
              ) : (
                <div className="fs-1">Select item to view its stats</div>
              )}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default DetailsAccordion;

const stratagemDetailsJSX = (selected) => {
  return (
    <>
      <div className="mt-2">
        <div className="mx-2 fs-5">STATS</div>
        <div className="px-2 infoBox">
          <div className="pt-1">CALL-IN TIME: {selected["call-in time"]}</div>
          <div className="pt-1">USES: {selected.uses}</div>
          {selected.capacity && (
            <div className="pt-1">CAPACITY: {selected.capacity}</div>
          )}
          {selected["fire rate"] && (
            <div className="pt-1">FIRE RATE (RPM): {selected["fire rate"]}</div>
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
          <div className="py-1">COOLDOWN TIME: {selected["cooldown time"]}</div>
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
  );
};

const helmetDetailsJSX = (selected) => {
  return (
    <>
      <div className="mt-2">
        <div className="mx-2 fs-5">STATS</div>
        <div className="px-2 infoBox">
          <div className="pt-1">ARMOR RATING: {selected["armor rating"]}</div>
          <div className="pt-1">SPEED: {selected.speed}</div>
          <div className="py-1">STAMINA REGEN: {selected["stamina regen"]}</div>
        </div>
      </div>
      <div className="mt-2">
        <div className="px-2 infoBox">
          <div className="pt-1">STANDARD ISSUE</div>
          <div className="py-1 ">No additional bonus</div>
        </div>
      </div>
    </>
  );
};

const armorDetailsJSX = (selected) => {
  return (
    <>
      <div className="mt-2">
        <div className="mx-2 fs-5">STATS</div>
        <div className="px-2 infoBox">
          <div className="pt-1">ARMOR RATING: {selected["armor rating"]}</div>
          <div className="pt-1">SPEED: {selected.speed}</div>
          <div className="py-1">STAMINA REGEN: {selected["stamina regen"]}</div>
        </div>
      </div>
      <div className="mt-2">
        <div className="mx-2 fs-5">ARMOR PASSIVE</div>
        <div className="px-2 infoBox">
          <div className="pt-1">
            {selected["armor passive"].name.toUpperCase()}
          </div>
          <div className="py-1 ">{selected["armor passive"].description}</div>
        </div>
      </div>
    </>
  );
};

const primaryDetailsJSX = (selected) => {
  return (
    <>
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
    </>
  );
};

const secondaryDetailsJSX = (selected) => {
  return <></>;
};

const throwableDetailsJSX = (selected) => {
  return <></>;
};

const jsxSwitch = (selected, variant) => {
  switch (variant) {
    case "stratagem":
      return stratagemDetailsJSX(selected);
    case "helmet":
      return helmetDetailsJSX(selected);
    case "armor":
      return armorDetailsJSX(selected);
    case "primary":
      return primaryDetailsJSX(selected);
    case "secondary":
      return secondaryDetailsJSX(selected);
    case "throwable":
      return throwableDetailsJSX(selected);
    default: 
      break
  }
};
