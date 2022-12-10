import "./Avatar.css";

const Avatar = ({ username }) => {
  return (
    <div className="circle">
      <div className="label">{(username[0] + username[1]).toUpperCase()}</div>
    </div>
  );
};

export default Avatar;
