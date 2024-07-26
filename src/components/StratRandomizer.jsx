import React from "react";
import StratagemButton from "./StratagemButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import helldivers2Data from "../gameData/helldivers2.json";

const StratRandomizer = ({
  stratagem1,
  setStratagem1,
  isStratagem1Locked,
  setIsStratagem1Locked,
  stratagem2,
  setStratagem2,
  isStratagem2Locked,
  setIsStratagem2Locked,
  stratagem3,
  setStratagem3,
  isStratagem3Locked,
  setIsStratagem3Locked,
  stratagem4,
  setStratagem4,
  isStratagem4Locked,
  setIsStratagem4Locked,
}) => {
  return (
    <div>
      <label className="h3 mt-2">Stratagems</label>
      <div className="d-flex justify-content-around mt-3">
        <div className="d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={isStratagem1Locked ? faLock : faLockOpen}
            className="fs-4 mb-2"
            onClick={() => {
              setIsStratagem1Locked(!isStratagem1Locked);
            }}
          />
          <StratagemButton
            otherStratagems={[
              stratagem2.name,
              stratagem3.name,
              stratagem4.name,
            ]}
            stratagem={stratagem1}
            setStratagem={setStratagem1}
            stratagemArray={helldivers2Data.stratagems}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={isStratagem2Locked ? faLock : faLockOpen}
            className="fs-4 mb-2"
            onClick={() => {
              setIsStratagem2Locked(!isStratagem2Locked);
            }}
          />
          <StratagemButton
            otherStratagems={[
              stratagem1.name,
              stratagem3.name,
              stratagem4.name,
            ]}
            stratagem={stratagem2}
            setStratagem={setStratagem2}
            stratagemArray={helldivers2Data.stratagems}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={isStratagem3Locked ? faLock : faLockOpen}
            className="fs-4 mb-2"
            onClick={() => {
              setIsStratagem3Locked(!isStratagem3Locked);
            }}
          />
          <StratagemButton
            otherStratagems={[
              stratagem1.name,
              stratagem2.name,
              stratagem4.name,
            ]}
            stratagem={stratagem3}
            setStratagem={setStratagem3}
            stratagemArray={helldivers2Data.stratagems}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={isStratagem4Locked ? faLock : faLockOpen}
            className="fs-4 mb-2"
            onClick={() => {
              setIsStratagem4Locked(!isStratagem4Locked);
            }}
          />
          <StratagemButton
            otherStratagems={[
              stratagem1.name,
              stratagem2.name,
              stratagem3.name,
            ]}
            stratagem={stratagem4}
            setStratagem={setStratagem4}
            stratagemArray={helldivers2Data.stratagems}
          />
        </div>
      </div>
    </div>
  );
};

export default StratRandomizer;
