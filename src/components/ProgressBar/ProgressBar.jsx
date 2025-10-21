import React from "react";

const Progres = ({ percentage }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "200px",
        borderRadius:"20px",
        overflow: "hidden",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          background: "blue",
          width: `${percentage}%`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:"20px"
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const per = [20, 40, 60, 80, 100];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding:"20px"
      }}
    >
      <h1>Progress Bar</h1>
      <div style={ { marginTop:"10px",padding:"10px"}}>
        {per.map((item) => {
          return <Progres style={{ margin: "10px" }} percentage={item} />;
        })}
        {/* <Progres percentage={50} /> */}
      </div>
    </div>
  );
};

export default ProgressBar;
