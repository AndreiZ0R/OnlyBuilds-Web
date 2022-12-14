import "./ClassicButton.css";
import { useState } from "react";

const ClassicButton = ({
  backgroundColor,
  label,
  labelColor,
  isRounded,
  onClick,
  hoverColor = "white",
  hoverBackground = "black",
  extraClasses,
}) => {
  const [hover, setHover] = useState("false");

  const normalStyle = {
    backgroundColor: backgroundColor,
    color: labelColor,
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
  };

  const hoverStyle = {
    backgroundColor: hoverBackground,
    color: hoverColor,
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
  };

  return (
    <button
      className={`classicButton ${extraClasses}`}
      style={hover === "true" ? hoverStyle : normalStyle}
      onMouseEnter={() => setHover("true")}
      onMouseLeave={() => setHover("false")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ClassicButton;
