import React from "react";

const Step2 = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 style={{fontSize:"20px", color:"grey"}}>Step 2 - Contact Details</h1>
      <input
        type="text"
        placeholder="Enter your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
       <br/>
          <br/>
      <input
        type="text"
        placeholder="Enter your Phone number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
    </div>
  );
};

export default Step2;
