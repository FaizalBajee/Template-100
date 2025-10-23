import React from "react";

export default function Profile({ data, setData }) {
  console.log(data);
  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
      {/* <h1>Profile</h1> */}
      <label>Name</label>
      <input
        type="text"
        value={data.name}
        placeholder="Enter Name"
        onChange={(e) => setData((pre) => ({ ...pre, name: e.target.value }))}
      />
      <label>Age</label>
      <input type="number" placeholder="Enter Age" value={data.age} onChange={(e) => setData((pre) => ({ ...pre, age: e.target.value }))}/>
      <label>Email</label>
      <input type="text" placeholder="Enter Email" value={data.email} onChange={(e) => setData((pre) => ({ ...pre, email: e.target.value }))} />
    </div>
  );
}
