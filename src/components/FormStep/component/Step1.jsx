import React from "react";

const Step1 = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 style={{fontSize:"20px", color:"grey"}}>Step 1 - Personal Details</h1>
      <input
        type="text"
        placeholder="Enter your First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <br/>
      <br/>
      <input
        type="text"
        placeholder="Enter your Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
    </div>
  );
};

export default Step1;
