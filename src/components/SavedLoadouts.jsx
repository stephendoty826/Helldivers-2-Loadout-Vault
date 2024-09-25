import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SavedLoadout from "./SavedLoadout";
import FactionCheckboxes from "./FactionCheckboxes";
import SearchLoadouts from "./SearchLoadouts";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const SavedLoadouts = () => {
  const [savedLoadouts, setSavedLoadouts] = useState([]);
  const [faction, setFaction] = useState("all");
  const [shownLoadouts, setShownLoadouts] = useState([]);
  const [searchedLoadouts, setSearchedLoadouts] = useState([]);
  const [randomLoadout, setRandomLoadout] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let savedLoadoutsJSON = localStorage.getItem("savedLoadouts");

    if (savedLoadoutsJSON) {
      setSavedLoadouts(JSON.parse(savedLoadoutsJSON));
    }
  }, []);

  useEffect(() => {
    let filteredLoadouts = savedLoadouts.filter((loadout) => {
      if (faction !== "all") {
        return loadout.faction === faction || loadout.faction === "all";
      } else {
        return true;
      }
    });
    setShownLoadouts(filteredLoadouts);
  }, [faction, savedLoadouts]);

  const getRandomLoadout = () => {
    setShow(false);
    let loadoutArray = searchedLoadouts.length > 0 ? searchedLoadouts : shownLoadouts
    setRandomLoadout(loadoutArray[(loadoutArray.length * Math.random()) | 0]);
    setShow(true);
  };

  return (
    <div>
      <Container className="savedLoadoutContainer">
        <div className="d-flex align-items-center flex-column vh-85">
          <p className="display-6 mt-2">Saved Loadouts</p>
          <Button
            variant="outline-light"
            onClick={getRandomLoadout}
            className="d-flex flex-column align-items-center fs-6 mb-3"
          >
            <FontAwesomeIcon icon={faShuffle} className="py-1 px-2" />
          </Button>
          <div className="d-flex">
            <SearchLoadouts shownLoadouts={shownLoadouts} setSearchedLoadouts={setSearchedLoadouts}/>
          </div>
          <FactionCheckboxes
            id="saved"
            faction={faction}
            setFaction={setFaction}
          />
          <div className="text-center w-100">
            {shownLoadouts.length > 0 ? (
              searchedLoadouts.length > 0 ? 
              searchedLoadouts.map((savedLoadout) => {
                return (
                  <div key={savedLoadout.id}>
                    <SavedLoadout
                      savedLoadout={savedLoadout}
                      savedLoadouts={savedLoadouts}
                      setSavedLoadouts={setSavedLoadouts}
                    />
                    <br />
                  </div>
                );
              })
              :
              shownLoadouts.map((savedLoadout) => {
                return (
                  <div key={savedLoadout.id}>
                    <SavedLoadout
                      savedLoadout={savedLoadout}
                      savedLoadouts={savedLoadouts}
                      setSavedLoadouts={setSavedLoadouts}
                    />
                    <br />
                  </div>
                );
              })
            ) : (
              <p>
                {faction === "all"
                  ? "No loadouts saved"
                  : `No loadouts saved for ${faction}`}
              </p>
            )}
          </div>
        </div>
      </Container>
      <Modal
        centered
        size="lg"
        fullscreen="lg-down"
        show={show}
        onHide={() => setShow(false)}
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Here is your loadout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center w-100">
            <SavedLoadout
              savedLoadout={randomLoadout}
              savedLoadouts={savedLoadouts}
              setSavedLoadouts={setSavedLoadouts}
              defaultActiveKey={"0"}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-light"
            onClick={getRandomLoadout}
            className="d-flex flex-column align-items-center fs-6"
          >
            <FontAwesomeIcon icon={faShuffle} className="py-1 px-2" />
          </Button>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SavedLoadouts;
