import ProfileCard from "../components/ProfileCard/ProfileCard";
import "./ProfilePage.css";
import User from "../models/UserModel.js";
import Avatar from "../components/PostCard/Avatar.jsx";
import StarRateIcon from "@mui/icons-material/StarRate";

const ProfilePage = () => {
  const user = new User(
    "andreiZ0R",
    "andrei@gmail.com",
    "url...",
    "Andrei",
    "Borza",
    "Deva",
    "Hunedoara",
    "Romania",
    330121,
    "0727752379",
    "User"
  );

  const MiniCard = ({ label, onClick }) => {
    return (
      <div onClick={onClick} className="miniCard">
        <span className="active">{label}</span>
        <span className="edit">Edit</span>
      </div>
    );
  };

  return (
    <div className="profileBackground profileGradient">
      <div className="profileMain glass profileDropshadow">
        <div className="leftCol">
          <Avatar
            username={user.username}
            size="9rem"
            border="1px solid black"
          />
          <div className="userName">
            <span style={{ display: "block", textAlign: "center" }}>
              {user.username}
            </span>
            <div style={{ padding: "1rem" }}>
              <span
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "0.6rem",
                }}
              >
                {user.firstName}
              </span>
              <span
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginLeft: "0.6rem",
                }}
              >
                {user.lastName}
              </span>
            </div>
          </div>
          <div className="userType">{user.tag}</div>
        </div>
        <div className="rightCol">
          <div className="genericRow">
            <div className="rowTitle">About:</div>
            <div className="normalRow">
              <MiniCard label={user.city} />
              <MiniCard label={user.state} />
              <MiniCard label={user.country} />
              <MiniCard label={user.zipcode} />
              <MiniCard label={user.phoneNumber} />
            </div>
          </div>
          <div className="genericRow">
            <div className="rowTitle">Recent activity:</div>
            <div className="normalRow">
              <MiniCard label={`Alex's post #31`} />
              <MiniCard label={`Maria's post #25`} />
              <MiniCard label={`Josh's post #143`} />
              <MiniCard label={`Ivy's post #9`} />
              <MiniCard label={`Daren's post #153`} />
            </div>
          </div>
          <div className="genericRow">
            <div className="rowTitle">Rating:</div>
            <div className="ratingRow">
              <StarRateIcon className="star" />
              <StarRateIcon className="star" />
              <StarRateIcon className="star" />
              <StarRateIcon className="star" />
              <StarRateIcon className="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
