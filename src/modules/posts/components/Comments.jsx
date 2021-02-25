import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/loader";

export default function Comments() {
  const { comments, commentsLoading } = useSelector((state) => state.posts);

  if (commentsLoading) return <Loader />;

  if (!comments) return null;

  return (
    <div>
      {comments.map((item) => (
        <CommentItem item={item} />
      ))}
    </div>
  );
}

const CommentItem = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <p>{item.body}</p>
    </div>
  );
};
