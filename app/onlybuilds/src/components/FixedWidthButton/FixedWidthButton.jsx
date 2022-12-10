import "./FixedWidthButton.css";
import { useState } from "react";

const FixedWidthButton = ({
  backgroundColor,
  label,
  labelColor,
  isRounded,
  onClick,
  hoverColor = "black",
  hoverLabelColor = "white",
}) => {
  const [hover, setHover] = useState("false");

  const normalStyle = {
    backgroundColor: backgroundColor,
    color: labelColor,
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
  };

  const hoverStyle = {
    backgroundColor: hoverColor,
    color: hoverLabelColor,
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
  };

  return (
    <button
      className="fixedWidthButton"
      style={hover === "true" ? hoverStyle : normalStyle}
      onMouseEnter={() => setHover("true")}
      onMouseLeave={() => setHover("false")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FixedWidthButton;
