import React from "react";

export default function Setting({data,setData}) {
  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
      {/* <h1>Setting</h1> */}
      <label>Light<input name="setting" value="light" checked={data.setting==="light"} onChange={()=>setData((pre)=>({...pre,setting:"light"}))} type="radio"/></label>
      <br/>
      <label>Dark<input name="setting" value="dark" checked={data.setting==="dark"} type="radio" onChange={(pre)=>setData((pre)=>({...pre,setting:"dark"}))}/></label>
    </div>
  );
}
