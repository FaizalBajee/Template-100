import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();


    const handleOpen = () => {
        console.log("first")
        navigate('/form')
    }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={handleOpen}>open Multi Step Form</button>
    </div>
  );
}
export default Home;
