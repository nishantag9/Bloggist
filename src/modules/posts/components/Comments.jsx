import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/loader";

export default function Comments() {
  const { comments, commentsLoading } = useSelector((state) => state.posts);

  if (commentsLoading) return <Loader />;

  if (!comments) return null;

  return (
    <div className="comment-list">
      {comments.map((item) => (
        <CommentItem item={item} />
      ))}
    </div>
  );
}

const CommentItem = ({ item }) => {
  return (
    <div className="comment-item">
      <div className="comment-item__info">
        <p className="comment-item__name">{item.name}</p>
        <p className="comment-item__email">{item.email}</p>
      </div>
      <p className="comment-item__text">{item.body}</p>
    </div>
  );
};
