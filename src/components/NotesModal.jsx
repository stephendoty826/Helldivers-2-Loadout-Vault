import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const NotesModal = ({
  notes,
  setNotes,
  show,
  onHide
}) => {
  
  const [shownNotes, setShownNotes] = useState(notes)

  // resets notes when "Reset" button is clicked on LoadoutBuilder
  useEffect(() => { 
    setShownNotes(notes)
  }, [notes])

  function handleCancelClick(){
    setShownNotes(notes)
    onHide()
  }

  function handleOKClick(){
    setNotes(shownNotes)
    onHide()
  }

  return (
    <Modal
      show={show}
      onHide={handleCancelClick}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal dropShadow"
      fullscreen="lg-down"
    >
      <Modal.Header closeButton>
        <div
          className="d-flex align-items-center fs-3"
          style={{ height: "5vh" }}
        >
          LOADOUT NOTES
        </div>
      </Modal.Header>
      <Modal.Body style={{ padding: "0px" }}>
        <Form style={{ height: "65vh" }}>
          <Form.Group
            className="mt-3 mx-3 h-100"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              type="text"
              onChange={(e) => setShownNotes(e.target.value)}
              value={shownNotes}
              placeholder="Add some loadout notes"
              style={{ height: "95%", width: "100%" }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" onClick={handleCancelClick}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleOKClick}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotesModal;
