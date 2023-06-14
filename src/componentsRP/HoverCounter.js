import React from "react";

export default function HoverCounter({handleCount, count}) {
  return (
    <div
      style={{
        backgroundColor: "teal",
        width: "250px",
        height: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
      onMouseOver={handleCount}
    >
      HoverComponent {count}
    </div>
  );
}
