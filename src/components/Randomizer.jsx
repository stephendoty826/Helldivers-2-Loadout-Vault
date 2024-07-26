import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import StratRandomizer from "./StratRandomizer";
import EquipmentRandomizer from "./EquipmentRandomizer";
import FactionCheckboxes from "./FactionCheckboxes";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { shuffleArray } from "../misc/utils";
import { v4 as uuidv4 } from "uuid";
import helldivers2Data from "../gameData/helldivers2.json";

const Randomizer = () => {
  const [stratagem1, setStratagem1] = useState({});
  const [stratagem2, setStratagem2] = useState({});
  const [stratagem3, setStratagem3] = useState({});
  const [stratagem4, setStratagem4] = useState({});
  const [armor, setArmor] = useState({});
  const [helmet, setHelmet] = useState({});
  const [cape, setCape] = useState({});
  const [primary, setPrimary] = useState({});
  const [secondary, setSecondary] = useState({});
  const [throwable, setThrowable] = useState({});
  const [faction, setFaction] = useState("all");
  const [loadoutName, setLoadoutName] = useState("");
  const [savedLoadouts, setSavedLoadouts] = useState([]);
  const [isStratagem1Locked, setIsStratagem1Locked] = useState(false);
  const [isStratagem2Locked, setIsStratagem2Locked] = useState(false);
  const [isStratagem3Locked, setIsStratagem3Locked] = useState(false);
  const [isStratagem4Locked, setIsStratagem4Locked] = useState(false);
  const [isHelmetLocked, setIsHelmetLocked] = useState(false);
  const [isArmorLocked, setIsArmorLocked] = useState(false);
  const [isCapeLocked, setIsCapeLocked] = useState(false);
  const [isPrimaryLocked, setIsPrimaryLocked] = useState(false);
  const [isSecondaryLocked, setIsSecondaryLocked] = useState(false);
  const [isThrowableLocked, setIsThrowableLocked] = useState(false);

  useEffect(() => {
    let savedLoadoutsJSON = localStorage.getItem("savedLoadouts");

    if (savedLoadoutsJSON) {
      setSavedLoadouts(JSON.parse(savedLoadoutsJSON));
    }
  }, []);

  const resetLoadout = () => {
    setStratagem1({});
    setIsStratagem1Locked(false);
    setStratagem2({});
    setIsStratagem2Locked(false);
    setStratagem3({});
    setIsStratagem3Locked(false);
    setStratagem4({});
    setIsStratagem4Locked(false);
    setArmor({});
    setIsArmorLocked(false);
    setHelmet({});
    setIsHelmetLocked(false);
    setCape({});
    setIsCapeLocked(false);
    setPrimary({});
    setIsPrimaryLocked(false);
    setSecondary({});
    setIsSecondaryLocked(false);
    setThrowable({});
    setIsThrowableLocked(false);
    setLoadoutName("");
    setFaction("all");
  };

  const saveLoadout = () => {
    let isLoadoutFilled =
      stratagem1.name &&
      stratagem2.name &&
      stratagem3.name &&
      stratagem4.name &&
      armor.name &&
      helmet.name &&
      cape.name &&
      primary.name &&
      secondary.name &&
      throwable.name &&
      loadoutName;

    if (isLoadoutFilled) {
      let loadout = {
        loadoutName,
        faction,
        stratagems: [stratagem1, stratagem2, stratagem3, stratagem4],
        armorSet: [helmet, armor, cape],
        equipment: [primary, secondary, throwable],
        id: uuidv4(),
      };

      // using temp array to ensure latest savedloadouts are saved to localStorage
      let tempSavedLoadouts = savedLoadouts;

      tempSavedLoadouts.unshift(loadout);
      // use setSavedLoadouts to update state
      setSavedLoadouts(tempSavedLoadouts);
      // stringify array
      let savedLoadoutsJSON = JSON.stringify(tempSavedLoadouts);
      // save array to local storage
      localStorage.setItem("savedLoadouts", savedLoadoutsJSON);

      resetLoadout();
    } else {
      alert(
        "The current loadout seems to be missing a stratagem, piece of equipment or a name. Ensure the loadout is complete before saving."
      );
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      saveLoadout();
    }
  };

  function randomizeLoadout() {
    // randomize Stratagems
    let allStratagems = [
      ...helldivers2Data.stratagems.offensive,
      ...helldivers2Data.stratagems.supply,
      ...helldivers2Data.stratagems.defensive,
    ];

    shuffleArray(allStratagems);

    setStratagem1(allStratagems.pop());
    setStratagem2(allStratagems.pop());
    setStratagem3(allStratagems.pop());
    setStratagem4(allStratagems.pop());

    // randomize equipment
    // helmet
    let helmetsArray = [...helldivers2Data.helmets];
    shuffleArray(helmetsArray);
    setHelmet(helmetsArray.pop());

    // armor
    let armorArray = [
      ...helldivers2Data.armor.light,
      ...helldivers2Data.armor.medium,
      ...helldivers2Data.armor.heavy,
    ];
    shuffleArray(armorArray);
    setArmor(armorArray.pop());

    // cape
    let capesArray = [...helldivers2Data.capes];
    shuffleArray(capesArray);
    setCape(capesArray.pop());

    // primary
    let primaryArray = [
      ...helldivers2Data.primaries["Assault Rifles"],
      ...helldivers2Data.primaries["Marksman Rifles"],
      ...helldivers2Data.primaries["Submachine Guns"],
      ...helldivers2Data.primaries.Shotguns,
      ...helldivers2Data.primaries.Explosive,
      ...helldivers2Data.primaries["Energy-Based"],
    ];
    shuffleArray(primaryArray);
    setPrimary(primaryArray.pop());
  }

  function runMultipleTimes(func, times, delay) {
    for (let i = 0; i < times; i++) {
      setTimeout(func, i * delay);
    }
  }

  return (
    <Container>
      <div className="d-flex align-items-center flex-column vh-85">
        <p className="display-6 mt-3">Loadout Randomizer</p>
        <Button
          variant="outline-light"
          // onClick={randomizeLoadout}
          onClick={() => {runMultipleTimes(randomizeLoadout, 20, 50)}}
          className="d-flex flex-column align-items-center my-4 fs-2"
        >
          <FontAwesomeIcon icon={faShuffle} className="my-1" />
          Randomize
        </Button>
        <div className="text-center w-100">
          <StratRandomizer
            stratagem1={stratagem1}
            setStratagem1={setStratagem1}
            isStratagem1Locked={isStratagem1Locked}
            setIsStratagem1Locked={setIsStratagem1Locked}
            stratagem2={stratagem2}
            setStratagem2={setStratagem2}
            isStratagem2Locked={isStratagem2Locked}
            setIsStratagem2Locked={setIsStratagem2Locked}
            stratagem3={stratagem3}
            setStratagem3={setStratagem3}
            isStratagem3Locked={isStratagem3Locked}
            setIsStratagem3Locked={setIsStratagem3Locked}
            stratagem4={stratagem4}
            setStratagem4={setStratagem4}
            isStratagem4Locked={isStratagem4Locked}
            setIsStratagem4Locked={setIsStratagem4Locked}
          />
          <EquipmentRandomizer
            armor={armor}
            setArmor={setArmor}
            isArmorLocked={isArmorLocked}
            setIsArmorLocked={setIsArmorLocked}
            helmet={helmet}
            setHelmet={setHelmet}
            isHelmetLocked={isHelmetLocked}
            setIsHelmetLocked={setIsHelmetLocked}
            cape={cape}
            setCape={setCape}
            isCapeLocked={isCapeLocked}
            setIsCapeLocked={setIsCapeLocked}
            primary={primary}
            setPrimary={setPrimary}
            isPrimaryLocked={isPrimaryLocked}
            setIsPrimaryLocked={setIsPrimaryLocked}
            secondary={secondary}
            setSecondary={setSecondary}
            isSecondaryLocked={isSecondaryLocked}
            setIsSecondaryLocked={setIsSecondaryLocked}
            throwable={throwable}
            setThrowable={setThrowable}
            isThrowableLocked={isThrowableLocked}
            setIsThrowableLocked={setIsThrowableLocked}
          />
          <div className="d-flex flex-column align-items-center w-100">
            <Form.Group className="mb-4 mt-4 w-75">
              <label className="h3">Faction</label>
              <FactionCheckboxes
                id="builder"
                faction={faction}
                setFaction={setFaction}
              />
              <Form.Label>Loadout Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLoadoutName(e.target.value)}
                value={loadoutName}
                placeholder="Enter loadout name"
                onKeyUp={(e) => handleKeyUp(e)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between w-50 mb-3">
              <Button variant="secondary" onClick={resetLoadout}>
                Reset
              </Button>
              <Button variant="primary" onClick={saveLoadout}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Randomizer;
