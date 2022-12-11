import "./Avatar.css";

const Avatar = ({
  username,
  size = "6.25rem",
  border = "none",
  textClasses,
}) => {
  return (
    <div
      className="circle"
      style={{ height: size, width: size, border: border }}
    >
      <div className="applyFont label">
        {username === null ? (username[0] + username[1]).toUpperCase() : "?"}
      </div>
    </div>
  );
};

export default Avatar;
