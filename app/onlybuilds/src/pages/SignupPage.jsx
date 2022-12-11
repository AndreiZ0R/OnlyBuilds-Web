import { getUsersEndpoint } from "../api/ApiHelper";
import { useState, useEffect } from "react";
import "./SignupPage.css";
import ApiComp from "../components/ApiComp/ApiComp.jsx";
import Post from "../models/PostModel";

const SignupPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUsersEndpoint()
      .then((data) => {
        const post = data.data;

        setPosts(
          post.map(
            (_p) =>
              new Post(
                _p["title"],
                _p["author_id"],
                _p["author"],
                _p["body"],
                _p["tag"],
                new Date()
              )
          )
        );
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <div className="cont">
      <div>
        {posts === null ? (
          <span>Empty</span>
        ) : (
          <div>
            {posts.map((post) => (
              <ApiComp post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
