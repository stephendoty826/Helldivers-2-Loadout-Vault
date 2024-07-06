import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const SavedLoadout = () => {
  return (
    // <div className="mt-5">
    //   <label className="h3">Loadout Name</label>
    //   <div className="d-flex justify-content-around mt-3">

    //   </div>
    // </div>
    <div>
      <Accordion className="custom-accordion">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <CustomToggle eventKey="0">
              <FontAwesomeIcon icon={faChevronDown} />
            </CustomToggle>{" "}
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default SavedLoadout