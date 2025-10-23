import React from "react";

export default function Interest({ data, setData }) {
  const { interest } = data;

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setData((pre) => ({
      ...pre,
      interest: checked
        ? [...pre.interest, name]
        : pre.interest.filter((item) => item !== name),
    }));
  };
  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
      {/* <h1>Interest</h1> */}
      <label>
        Front End{" "}
        <input
          checked={interest.includes("frontEnd")}
          type="checkbox"
          name="frontEnd"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Back End{" "}
        <input
          checked={interest.includes("backEnd")}
          type="checkbox"
          name="backEnd"
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        DevOps{" "}
        <input
          checked={interest.includes("devops")}
          type="checkbox"
          name="devops"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
