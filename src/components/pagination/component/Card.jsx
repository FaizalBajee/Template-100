import React from "react";

export default function Card({ data, start, end }) {
  return (
    <div
      style={{
        backgroundColor: "#121212", // full dark background
        // minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {data.slice(start-1, end).map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1E1E1E",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              cursor: "pointer",
              width: "220px",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 18px rgba(0, 0, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.5)";
            }}
          >
            <img
              src={item.images[0]}
              width="220"
              height="300"
              alt="preview"
              style={{
                objectFit: "cover",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <p
              style={{
                color: "#E0E0E0",
                fontSize: "16px",
                fontWeight: 500,
                padding: "10px 5px",
                margin: 0,
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
