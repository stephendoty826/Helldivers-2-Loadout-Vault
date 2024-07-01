import React from "react";
import Button from "react-bootstrap/Button";

const StratBuilder = () => {
  return (
    <div>
      <label className="h3 mt-4">Stratagems</label>
      <div className="d-flex justify-content-around mt-3">
        <Button variant="secondary" className="stratButton"></Button>
        <Button variant="secondary" className="stratButton"></Button>
        <Button variant="secondary" className="stratButton"></Button>
        <Button variant="secondary" className="stratButton"></Button>
      </div>
    </div>
  );
};

export default StratBuilder;
