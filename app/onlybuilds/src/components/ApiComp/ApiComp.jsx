import { useState, useEffect } from "react";
import { getUserByName } from "../../api/ApiHelper";
import PostCard from "../PostCard/PostCard";
import User from "../../models/UserModel";

const ApiComp = ({ post }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!post) return;

    const getUser = async () => {
      return await getUserByName(post.creator).then((res) => res.data);
    };

    const okok = getUser();

    setUser(
      new User(
        okok["username"],
        okok["email"],
        "f",
        okok["first_name"],
        okok["last_name"],
        okok["city"],
        okok["state"],
        okok["country"],
        okok["zipcode"],
        okok["phone"],
        okok["account_type"]
      )
    );
  }, [post]);

  if (!post || !user) return <></>;

  console.log(user);
  return <PostCard user={user} post={post} />;
};

export default ApiComp;
