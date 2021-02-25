import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostsLists from "./components/PostsList";
import { getPosts } from "./redux/actions";
import Loader from "../../components/loader";

export default function Posts() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { loading, postsByUserId } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!postsByUserId[userId]?.length) dispatch(getPosts(userId));
  }, [dispatch, userId, postsByUserId]);

  if (loading) return <Loader />;

  return <PostsLists />;
}
