import {useState} from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EquipmentModal(props) {

  const [selected, setSelected] = useState({})

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal"
      fullscreen
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Select Armor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-wrap justify-content-between modalTop">
          {props.itemsArray.light.map((equipment) => {
            return <img 
            style={{
              width: "27vw",
              paddingBottom: "3vw"
            }} src={equipment.image} key={equipment.image} alt="" onClick={()=>setSelected(equipment)} />;
          })}
        </div>
        <hr />
        <div className="modalBottom">
          <p>{selected.name}</p>
          <p>{selected.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EquipmentModal;
