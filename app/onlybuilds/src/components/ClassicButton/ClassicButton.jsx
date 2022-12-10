import "./ClassicButton.css"
import { useState } from "react";

const ClassicButton = ({
    backgroundColor,
    label,
    labelColor,
    isRounded,
    onClick
}) => {

    const [hover, setHover] = useState("false");
  

    const normalStyle = {
        backgroundColor: backgroundColor,
        color: labelColor,
        borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0
    };

    const hoverStyle = {
        backgroundColor: labelColor,
        color: backgroundColor,
        borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0
    };

    return (
        <button
            className="classicButton"
            style={hover === "true" ? hoverStyle : normalStyle}
            onMouseEnter={() => setHover("true")}
            onMouseLeave={() => setHover("false")}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default ClassicButton;