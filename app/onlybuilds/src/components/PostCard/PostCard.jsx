import "./PostCard.css";
import Avatar from "./Avatar.jsx";
import TextButton from "../TextButton/TextButton";
import User from "../../models/UserModel.js";
import Post from "../../models/PostModel.js";

const PostCard = ({
  user = User.defaultUser(),
  post = Post.defaultPost(),
  onClick,
}) => {
  return (
    <div className="postContainer">
      <div className="mainCard">
        <div className="headerRow">
          <div className="postDivider"></div>
          <div className="headerMainColumn">
            <Avatar username={user.username} />
            <div className="userName">{user.username}</div>
            <div className="postDate">{post.formattedDate()}</div>
          </div>
          <div className="headerSecColumn">
            <div
              className="postTag applyFont"
              style={{
                backgroundColor:
                  post.tag === "Build-It"
                    ? "var(--secondaryColor)"
                    : "var(--accentPrimaryColor)",
              }}
            >
              {post.tag}
            </div>
          </div>
        </div>
        <div className="titleRow">
          <span>{post.title}</span>
        </div>
        <div className="mainRow">
          <div className="postBody">
            <span>{post.body}</span>
          </div>
        </div>
        <div className="footerRow">
          <TextButton
            label="Read More"
            labelColor="#1191d1"
            hoverColor="#11f282"
            extraClasses="applyFont"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
