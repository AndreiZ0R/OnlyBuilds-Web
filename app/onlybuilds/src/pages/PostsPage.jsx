import PostCard from "../components/PostCard/PostCard";
import User from "../models/UserModel.js";
import Post from "../models/PostModel.js";

const PostsPage = () => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id culpa hic? Minima reprehenderit similique iure eius, adipisci delectus optio odio iusto ipsa quam vero deleniti eaque repellat perferendis dolorum.\
     Illo nam error reiciendis molestiae vel, odio dolore sint necessitatibus nulla, ad, deserunt impedit quam quo! Magni placeat laudantium eos dolorem accusantium fuga soluta illum in, nemo eius! Natus, doloremque. Illo nam error reiciendis molestiae vel, odio dolore sint necessitatibus nulla, ad, deserunt impedit quam quo! Magni placeat laudantium eos dolorem accusantium fuga soluta illum in, nemo eius! Natus, doloremque.\
     Vitae illo temporibus laboriosam eum incidunt eos voluptatem provident, sed, ea non facilis! Sapiente, consequuntur accusantium inventore nemo laboriosam quaerat perspiciatis necessitatibus quo, minima asperiores ex quis veritatis. Explicabo, rem?";

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
      lorem,
      "Build-It",
      "2022-12-08"
    ),
    new Post(
      "Suggestion for a build around 2500$",
      "1",
      users[1].username,
      lorem,
      "Suggestion",
      "2022-12-08"
    ),
    new Post(
      "Need a custom pc for video editing ASAP",
      "1",
      users[2].username,
      lorem,
      "Build-It",
      "2021-12-05"
    ),
    new Post(
      "Any good CPU's under 600$?",
      "1",
      users[3].username,
      lorem,
      "Suggestion",
      "2022-09-019"
    ),
  ];

  return (
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
};

export default PostsPage;
