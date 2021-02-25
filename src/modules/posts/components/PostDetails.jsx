import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deletePost, resetDetails } from "../redux/actions";
import { DELETED } from "../../../helpers/constants";

export default function PostDetails() {
  const { postId, userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { postDetails, deleting } = useSelector((state) => state.posts);

  useEffect(() => {
    return () => dispatch(resetDetails());
  }, []);

  useEffect(() => {
    if (deleting === DELETED) history.push(`/posts/${userId}`);
  }, [deleting, history, userId]);

  const handleDelete = () => {
    dispatch(deletePost(postId, userId));
  };

  if (!postDetails) return null;

  return (
    <div>
      <h4>{postDetails.title}</h4>
      <p>{postDetails.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
