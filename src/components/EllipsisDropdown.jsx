import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import EditModal from "./EditModal";

function EllipsisDropDown({ loadout, savedLoadouts, setSavedLoadouts }) {
  const [showModal, setShowModal] = useState(false);

  const deleteLoadout = () => {
    let deleteLoadout = window.confirm(
      `Delete this loadout: "${loadout.loadoutName}"?`
    );
    if (deleteLoadout) {
      let filteredSavedLoadouts = savedLoadouts.filter(
        (savedLoadout) => loadout.id !== savedLoadout.id
      );
      setSavedLoadouts(filteredSavedLoadouts);
      let savedLoadoutsJSON = JSON.stringify(filteredSavedLoadouts);
      localStorage.setItem("savedLoadouts", savedLoadoutsJSON);
    }
  };

  return (
    <>
      <Dropdown className="e-caret-hide custom-dropdown-menu">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
              Edit Loadout
          </Dropdown.Item>
          <Dropdown.Item onClick={deleteLoadout} style={{ color: "red" }}>
              <FontAwesomeIcon icon={faTrashCan} className="me-2" />
              <strong>Delete Loadout</strong>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {showModal && (
        <EditModal
          loadout={loadout}
          onHide={() => setShowModal(false)}
          show={true}
          savedLoadouts={savedLoadouts}
          setSavedLoadouts={setSavedLoadouts}
        />
      )}
    </>
  );
}

export default EllipsisDropDown;
