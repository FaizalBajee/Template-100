import React, { Component, useState } from "react";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Setting from "./components/Setting";

export default function MultiTabs() {
  const [data, setData] = useState({
    name:"",
    age:"",
    email:"",
    interest:["backEnd"],
    setting:""
  });
  const [activetab, setActivetab] = useState(0);
  const Tab = [
    {
      name: "Profile",
      Component: Profile,
    },
    {
      name: "Interest",
      Component: Interest,
    },
    {
      name: "Setting",
      Component: Setting,
    },
  ];

  const ActiveTab = Tab[activetab].Component;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Multi Tabs</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "30px",
          // padding: "20px",
        }}
      >
        {Tab.map((tab, index) => (
          <div style={{ margin: "10px" }} key={index}>
            <span
              style={{
                cursor: "pointer",
                border: "1px solid black",
                borderRadius: "10px",
                padding: "10px",
              }}
              onClick={() => setActivetab(index)}
            >
              {tab.name}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          border: "1px solid black",
          width: "500px",
          height: "200px",
          marginLeft: "40px",
        }}
      >
        <ActiveTab />
      </div>
    </div>
  );
}
