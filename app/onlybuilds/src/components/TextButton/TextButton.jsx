import "./TextButton.css";
import { useState } from "react";

const TextButton = ({
  label,
  labelColor,
  isRounded,
  onClick,
  extraClasses,
  hoverColor = "white",
}) => {
  const [hover, setHover] = useState("false");

  const normalStyle = {
    color: labelColor,
    backgroundColor: "transparent",
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
  };

  const hoverStyle = {
    backgroundColor: "transparent",
    color: hoverColor,
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
  };

  return (
    <button
      className={`textButton ${extraClasses}`}
      style={hover === "true" ? hoverStyle : normalStyle}
      onMouseEnter={() => setHover("true")}
      onMouseLeave={() => setHover("false")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TextButton;
