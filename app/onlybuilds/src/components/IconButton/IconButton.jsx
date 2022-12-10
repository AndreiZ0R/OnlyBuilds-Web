import "./IconButton.css"
import { IconButton } from "@mui/material";
import { useState } from "react";



const IconButtons = ({
    backgroundColor,
    iconColor,
    labelColor,
    label,
    onClick,
    iconType,
    labelBefore,
    isRounded
}) => {

    const [hover, setHover] = useState("false");

    const normalStyle = {
      backgroundColor: backgroundColor,
      color: iconColor,
      border: `var(--borderWidth) solid ${labelColor}`,
      borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
    };
  
    const hoverStyle = {
      backgroundColor: iconColor,
      color: backgroundColor,
      borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
    };

    return (
        <div>
            <IconButton className="deleteIconButton"
            style={hover === "true" ? hoverStyle : normalStyle}
            onMouseEnter={() => setHover("true")}
            onMouseLeave={() => setHover("false")}
            onClick={onClick}
            >
                {labelBefore === "true" ? label : ""}
                {iconType}
                {labelBefore === "true" ? "" : label}
            </IconButton>
        </div>
    );
};



export default IconButtons;