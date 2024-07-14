import React from "react";
import StratagemButton from "./StratagemButton";
import helldivers2Data from "../gameData/helldivers2.json";

const StratBuilder = ({
  stratagem1,
  setStratagem1,
  stratagem2,
  setStratagem2,
  stratagem3,
  setStratagem3,
  stratagem4,
  setStratagem4,
}) => {
  return (
    <div>
      <label className="h3 mt-2">Stratagems</label>
      <div className="d-flex justify-content-around mt-3">
        <StratagemButton
          stratagem={stratagem1}
          setStratagem={setStratagem1}
          stratagemArray={helldivers2Data.stratagems}
        />
        <StratagemButton
          stratagem={stratagem2}
          setStratagem={setStratagem2}
          stratagemArray={helldivers2Data.stratagems}
        />
        <StratagemButton
          stratagem={stratagem3}
          setStratagem={setStratagem3}
          stratagemArray={helldivers2Data.stratagems}
        />
        <StratagemButton
          stratagem={stratagem4}
          setStratagem={setStratagem4}
          stratagemArray={helldivers2Data.stratagems}
        />
      </div>
    </div>
  );
};

export default StratBuilder;
