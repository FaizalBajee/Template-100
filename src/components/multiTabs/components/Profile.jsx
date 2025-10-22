import React from "react";

export default function Profile() {
  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
      {/* <h1>Profile</h1> */}
      <label>Name</label>
      <input type="text" />
      <label>Age</label>
      <input type="number" />
      <label>Email</label>
      <input type="text" />
    </div>
  );
}
