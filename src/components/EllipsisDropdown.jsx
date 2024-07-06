import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical, faTrashCan
} from "@fortawesome/free-solid-svg-icons";

function EllipsisDropDown({id, name, savedLoadouts, setSavedLoadouts}) {

  const deleteLoadout = () => {

    let deleteLoadout = window.confirm(`Delete this loadout: \"${name}\"?`);
    if (deleteLoadout) {
      let filteredSavedLoadouts = savedLoadouts.filter(
      (savedLoadout) => id !== savedLoadout.id
    );
    setSavedLoadouts(filteredSavedLoadouts)
    let savedLoadoutsJSON = JSON.stringify(filteredSavedLoadouts);
    localStorage.setItem("savedLoadouts", savedLoadoutsJSON);
    }


    
  }

  return (
    <Dropdown className="e-caret-hide custom-dropdown-menu">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        <Dropdown.Item onClick={deleteLoadout}>
          Delete Loadout
          <FontAwesomeIcon icon={faTrashCan} className="ms-3"/>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default EllipsisDropDown;
