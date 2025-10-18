import React from "react";

const StepNavigation = ({ step, setStep, totalStep }) => {
  return (
    <div>
      {step > 0 && <button onClick={() => setStep(step - 1)}>Previous</button>}
      {step < totalStep - 1 && (
        <button onClick={() => setStep(step + 1)}>Next</button>
      )}
      {step === totalStep - 1 && (
        <button onClick={() => alert("confirm submit")}> Submit</button>
      )}
    </div>
  );
};

export default StepNavigation;
