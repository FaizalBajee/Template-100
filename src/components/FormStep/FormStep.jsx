import React, { use, useState } from "react";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import Step3 from "./component/Step3";
import StepNavigation from "./component/StepNavigation";

function FormStep() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const steps = [
    <Step1 formData={formData} setFormData={setFormData} />,
    <Step2 formData={formData} setFormData={setFormData} />,
    <Step3 formData={formData} setFormData={setFormData} />,
  ];

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          // background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          padding: "30px",
          width: "360px",
          textAlign: "center",
        }}
      >
        <h1>Multi Step Form</h1>
        {steps[step]}
        <br></br>
        <StepNavigation
          step={step}
          setStep={setStep}
          totalStep={steps.length}
        />
      </div>
    </div>
  );
}

export default FormStep;
