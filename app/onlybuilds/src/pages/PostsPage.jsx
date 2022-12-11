import PostCard from "../components/PostCard/PostCard";
import User from "../models/UserModel.js";
import Post from "../models/PostModel.js";
import { useState, useEffect } from "react";

const PostsPage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id culpa hic? Minima reprehenderit similique iure eius, adipisci delectus optio odio iusto ipsa quam vero deleniti eaque repellat perferendis dolorum.\
     Illo nam error reiciendis molestiae vel, odio dolore sint necessitatibus nulla, ad, deserunt impedit quam quo! Magni placeat laudantium eos dolorem accusantium fuga soluta illum in, nemo eius! Natus, doloremque. Illo nam error reiciendis molestiae vel, odio dolore sint necessitatibus nulla, ad, deserunt impedit quam quo! Magni placeat laudantium eos dolorem accusantium fuga soluta illum in, nemo eius! Natus, doloremque.\
     Vitae illo temporibus laboriosam eum incidunt eos voluptatem provident, sed, ea non facilis! Sapiente, consequuntur accusantium inventore nemo laboriosam quaerat perspiciatis necessitatibus quo, minima asperiores ex quis veritatis. Explicabo, rem?";

  const mobileLorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id culpa hic? Minima reprehenderit similique iure eius, adipisci delectus optio odio iusto ipsa quam vero deleniti eaque repellat perferendis dolorum.\
";

  const users = [
    new User(
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
    ),
    new User(
      "warper",
      "cristi@gmail.com",
      "url...",
      "Cristian",
      "Budin",
      "Sibiu",
      "Sibiu",
      "Romania",
      43131,
      "0743894031",
      "User"
    ),
    new User(
      "ristian",
      "risti@gmail.com",
      "url...",
      "Cristian",
      "Bildea",
      "Targu Jiu",
      "Gorj",
      "Romania",
      431335,
      "0749983714",
      "User"
    ),
    new User(
      "politaiu",
      "popa@gmail.com",
      "url...",
      "Alex",
      "Popa",
      "Petrosani",
      "Hunedoara",
      "Romania",
      134598,
      "078492042104",
      "User"
    ),
  ];

  const posts = [
    new Post(
      "PC under 2000$",
      "1",
      users[0].username,
      windowSize.innerWidth > 756 ? lorem : mobileLorem,
      "Build-It",
      new Date()
    ),
    new Post(
      "Suggestion for a build around 2500$",
      "1",
      users[1].username,
      windowSize.innerWidth > 756 ? lorem : mobileLorem,
      "Suggestion",
      new Date()
    ),
    new Post(
      "Need a custom pc for video editing ASAP",
      "1",
      users[2].username,
      windowSize.innerWidth > 756 ? lorem : mobileLorem,
      "Build-It",
      new Date()
    ),
    new Post(
      "Any good CPU's under 600$?",
      "1",
      users[3].username,
      windowSize.innerWidth > 756 ? lorem : mobileLorem,
      "Suggestion",
      new Date()
    ),
  ];

  const webView = (
    <>
      <div className="postContainer">
        <PostCard user={users[0]} post={posts[0]} onClick={() => {}} />
        <PostCard user={users[1]} post={posts[1]} onClick={() => {}} />
      </div>
      <div className="postContainer">
        <PostCard user={users[2]} post={posts[2]} onClick={() => {}} />
        <PostCard user={users[3]} post={posts[3]} onClick={() => {}} />
      </div>
    </>
  );

  const mobileView = (
    <>
      <div className="postContainer">
        <PostCard user={users[0]} post={posts[0]} onClick={() => {}} />
      </div>
      <div className="postContainer">
        <PostCard user={users[1]} post={posts[1]} onClick={() => {}} />
      </div>
      <div className="postContainer">
        <PostCard user={users[2]} post={posts[2]} onClick={() => {}} />
      </div>
      <div className="postContainer">
        <PostCard user={users[3]} post={posts[3]} onClick={() => {}} />
      </div>
    </>
  );

  return <>{windowSize.innerWidth > 756 ? webView : mobileView}</>;
};

export default PostsPage;
