import React from "react";

const Step3 = ({ formData }) => {
  return (
    <div>
      <h1>Step 3 - Review</h1>
      <p><strong>First Name :</strong> {formData.firstName}</p>
      <p><strong>Last Name :</strong> {formData.lastName}</p>
      <p><strong>Email :</strong> {formData.email}</p>
      <p><strong>Phone :</strong> {formData.phone}</p>
    </div>
  );
};

export default Step3;
