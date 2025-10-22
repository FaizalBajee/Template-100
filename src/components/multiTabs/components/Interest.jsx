import React from "react";

export default function Interest() {
  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
      {/* <h1>Interest</h1> */}
      <label>
        Front End <input type="checkbox" />
      </label>
      <br />
      <label>
        Back End <input type="checkbox" />
      </label>
      <br />

      <label>
        DevOps <input type="checkbox" />
      </label>
    </div>
  );
}
