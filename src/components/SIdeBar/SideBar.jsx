import React, { useState } from "react";
import json from "./data.json";

const List = ({ data }) => {
  const [expant, setExpant] = useState({});
  return (
    <div style={{marginLeft:"20px"}}>
      {data.map((item, index) => (
        <div key={index}>
          {item.isFolder ? (
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                setExpant((pre) => ({ ...pre, [item.name]: !pre?.[item.name] }))
              }
            >
              {expant?.[item.name] ? "- " : "+ "}
            </span>
          ) : (
            ""
          )}
          <span>{item.name}</span>
          {item.children && expant?.[item.name] ? <List data={item.children} /> : ""}
        </div>
      ))}
    </div>
  );
};

const SideBar = () => {
  const [data, setData] = useState(json);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Side Bar</h1>
      </div>

      <div style={{ marginLeft: "20px", marginTop: "20px",paddingTop:"30px" ,width:"200px",border:"1px solid black",borderRadius:"20px" , height:"80vh"}}>
        <List data={data} />
      </div>
    </div>
  );
};

export default SideBar;
