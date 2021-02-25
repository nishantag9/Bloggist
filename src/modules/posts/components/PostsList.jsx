import React, {useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function PostsList() {
  const { userId } = useParams();
  const { postsByUserId } = useSelector((state) => state.posts);
  const userPosts = postsByUserId[userId];
  const [filter, setFilter] = useState("")

  return (
    <div>
      <input
        type="text"
        name="filter"
        placeholder="Filter Title"
        onChange={(e) => setFilter(e.target.value)}
      />
      {userPosts.filter((post) => post.title.includes(filter)).map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

const PostItem = ({ post }) => {
    const {pathname} = useLocation()
  return (
    <div>
      <p>{post.title}</p>
      <Link to={`${pathname}/post/${post.id}`}>Details</Link>
    </div>
  );
};
