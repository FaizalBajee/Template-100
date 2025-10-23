import React from "react";

export default function Buttons({ step, setStep, total }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        marginRight: "20px",
      }}
    >
      {/* <h1>buttonz</h1> */}
      {step > 0 && <button onClick={() => setStep(step - 1)}>Previous</button>}
      {step < total - 1 && (
        <button onClick={() => setStep(step + 1)}>Next</button>
      )}
      {step == total - 1 && (
        <button onClick={() => alert("Verify and confirm submit")}>
          Submit
        </button>
      )}
    </div>
  );
}
