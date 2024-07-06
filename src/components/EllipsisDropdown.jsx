import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function EllipsisDropDown() {
  return (
    <Dropdown className="e-caret-hide custom-dropdown-menu">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default EllipsisDropDown;
