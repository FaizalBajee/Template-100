import React from "react";

export default function Setting() {
  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
      {/* <h1>Setting</h1> */}
      <label>Light<input type="radio"/></label>
      <label>Dark<input type="radio"/></label>
    </div>
  );
}
