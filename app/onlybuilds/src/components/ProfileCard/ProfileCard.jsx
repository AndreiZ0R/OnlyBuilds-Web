import "./ProfileCard.css";

const ProfileCard = ({ child, extraClasses }) => {
  return (
    <div className={`mainContainer ${extraClasses}`}>
      <div className="secondContainer glass">{child}</div>
    </div>
  );
};

export default ProfileCard;
