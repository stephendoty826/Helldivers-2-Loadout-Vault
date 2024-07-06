import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function ContextAwareToggle({ eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
      {isCurrentEventKey ? (
        <FontAwesomeIcon icon={faChevronUp} onClick={decoratedOnClick} />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} onClick={decoratedOnClick} />
      )}
    </>
  );
}

const SavedLoadout = ({ savedLoadout }) => {
  return (
    // <div className="mt-5">
    //   <label className="h3">Loadout Name</label>
    //   <div className="d-flex justify-content-around mt-3">

    //   </div>
    // </div>
    <div>
      <div className="fs-4 my-2`">{savedLoadout.loadoutName}</div>
      <Accordion className="custom-accordion">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <ContextAwareToggle eventKey="0" />
            {savedLoadout.stratagems.map((stratagem) => {
              return (
                <img src={stratagem.image} alt="" style={{ width: "15vw" }} />
              );
            })}
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default SavedLoadout;
