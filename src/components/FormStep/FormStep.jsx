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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Multi Step Form</h1>
      {steps[step]}
      <StepNavigation step={step} setStep={setStep} totalStep={steps.length} />
    </div>
  );
}

export default FormStep;
