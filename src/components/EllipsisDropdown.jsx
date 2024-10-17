import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faTrashCan,
  faPenToSquare,
  faCopy,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";
import CopyOrEditModal from "./CopyOrEditModal";
import EditNotesModal from "./EditNotesModal";

function EllipsisDropDown({ loadout, savedLoadouts, setSavedLoadouts }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [showEditNotesModal, setShowEditNotesModal] = useState(false);

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
          <Dropdown.Item onClick={() => setShowEditModal(true)}>
            <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
            Edit Loadout
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setShowCopyModal(true)}>
            <FontAwesomeIcon icon={faCopy} className="me-2" />
            Copy Loadout
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setShowEditNotesModal(true)}>
            <FontAwesomeIcon icon={faClipboard} className="me-2" />
            View/Edit Notes
          </Dropdown.Item>
          <Dropdown.Item onClick={deleteLoadout} style={{ color: "red" }}>
            <FontAwesomeIcon icon={faTrashCan} className="me-2" />
            <strong>Delete Loadout</strong>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {showEditModal && (
        <CopyOrEditModal
          loadout={loadout}
          onHide={() => setShowEditModal(false)}
          show={true}
          savedLoadouts={savedLoadouts}
          setSavedLoadouts={setSavedLoadouts}
          variant="edit"
        />
      )}
      {showCopyModal && (
        <CopyOrEditModal
          loadout={loadout}
          onHide={() => setShowCopyModal(false)}
          show={true}
          savedLoadouts={savedLoadouts}
          setSavedLoadouts={setSavedLoadouts}
          variant="copy"
        />
      )}
      <EditNotesModal 
        show={showEditNotesModal}
        notes={loadout.notes}
        loadout={loadout}
        savedLoadouts={savedLoadouts}
        setSavedLoadouts={setSavedLoadouts}
        onHide={() => setShowEditNotesModal(false)}
      />
    </>
  );
}

export default EllipsisDropDown;
