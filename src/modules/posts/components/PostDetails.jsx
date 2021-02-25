import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Comments from "./Comments";
import { deletePost, resetDetails, toggleComments } from "../redux/actions";
import { DELETED } from "../../../helpers/constants";

export default function PostDetails() {
  const { postId, userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { postDetails, deleting, showComments } = useSelector(
    (state) => state.posts
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    return () => dispatch(resetDetails());
  }, []);

  useEffect(() => {
    if (deleting === DELETED) history.push(`/posts/${userId}`);
  }, [deleting, history, userId]);

  const handleDelete = () => {
    dispatch(deletePost(postId, userId));
  };

  const getFilteredText = (text) => {
    if (!filter) return text;
    let element = [];
    const trimmedFilter = filter.trim();
    let arr = text.split(trimmedFilter);
    arr.forEach((item, i) => {
      element.push(item);
      if (i < arr.length - 1) {
        element.push(
          <span style={{ backgroundColor: "grey" }}>{trimmedFilter}</span>
        );
      }
    });
    return element;
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleToggleComments = () => {
    dispatch(toggleComments(!showComments, postId));
  };

  if (!postDetails) return null;

  return (
    <div>
      <input
        type="text"
        name="filter"
        placeholder="Filter"
        onChange={handleFilter}
      />
      <h4>{getFilteredText(postDetails.title)}</h4>
      <p>{getFilteredText(postDetails.body)}</p>
      {showComments && <Comments />}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggleComments}>
        {showComments ? "Hide" : "View"} Comments
      </button>
    </div>
  );
}
