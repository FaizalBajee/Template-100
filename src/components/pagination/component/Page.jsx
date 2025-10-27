import React from "react";

export default function Page({ page, setActivePage, activePage }) {
  console.log({page})
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        padding: "15px",
        backgroundColor: "#121212", 
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.6)",
      }}
    >
      {/* ← Previous button */}
      {activePage > 1 && (
        <button
          onClick={() => setActivePage((pre) => pre - 1)}
          style={buttonStyle}
        >
          ←
        </button>
      )}

      {page.map((item, index) => {
        const isActive = activePage === item + 1;
        return (
          <button
            key={index}
            onClick={() => setActivePage(item + 1)}
            style={{
              ...buttonStyle,
              backgroundColor: isActive ? "#00bcd4" : "#1e1e1e",
              color: isActive ? "#121212" : "#f1f1f1",
              border:
                isActive ? "1px solid #00bcd4" : "1px solid rgba(255,255,255,0.2)",
              transform: isActive ? "scale(1.1)" : "scale(1)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            {item + 1}
          </button>
        );
      })}

      {activePage < page.length && (
        <button
          onClick={() => setActivePage((pre) => pre + 1)}
          style={buttonStyle}
        >
          →
        </button>
      )}
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#1e1e1e",
  color: "#f1f1f1",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "8px",
  padding: "6px 12px",
  fontSize: "18px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  outline: "none",
  fontWeight: 500,
};

