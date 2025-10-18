import React from "react";

const StepNavigation = ({ step, setStep, totalStep }) => {
  return (
    <div style={{ marginTop: "20px",  }}>
      {step > 0 && <button style={{ marginRight: "5px" }} onClick={() => setStep(step - 1)}>Previous</button>}
      {step < totalStep - 1 && (
        <button style={{ marginLeft: "5px" }} onClick={() => setStep(step + 1)}>Next</button>
      )}
      {step === totalStep - 1 && (
        <button style={{ marginLeft: "5px" }} onClick={() => alert("confirm submit")}> Submit</button>
      )}
    </div>
  );
};

export default StepNavigation;
