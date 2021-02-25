import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Comments from "./Comments";
import { deletePost, resetDetails, toggleComments } from "../redux/actions";
import { DELETED } from "../../../helpers/constants";
import Input from "../../../components/input";
import Loader from "../../../components/loader";

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
    if (deleting === DELETED) {
      toast.success("Post successfully deleted");
      history.push(`/posts/${userId}`);
    }
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
          <span
            style={{
              backgroundColor: "var(--highlight-primary)",
              color: "var(--bg-1)",
            }}
          >
            {trimmedFilter}
          </span>
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
    <div className="post-details">
      <div className="post-details__filter">
        <Input
          label="Filter Text"
          type="text"
          name="filter"
          placeholder="Filter"
          onChange={handleFilter}
        />
      </div>

      <div className="post-details__data">
        <div>
          <h4>Title:</h4>
          <h4>{getFilteredText(postDetails.title)}</h4>
        </div>

        <div>
          <p>Body:</p>
          <p>{getFilteredText(postDetails.body)}</p>
        </div>
      </div>

      {showComments && (
        <>
          <h4 className="post-details__comments">Comments</h4>
          <Comments />
        </>
      )}
      <div className="post-details__actions">
        {deleting ? (
          <span className="post-details__delete-loader">
            <Loader xs />
          </span>
        ) : (
          <button onClick={handleDelete}>Delete</button>
        )}
        <button onClick={handleToggleComments}>
          {showComments ? "Hide" : "View"} Comments
        </button>
      </div>
    </div>
  );
}
