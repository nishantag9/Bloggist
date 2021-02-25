import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostsLists from "./components/PostsList";
import { getPosts } from "./redux/actions";
import { getUsers } from "../home/redux/actions";
import Loader from "../../components/loader";

import "./postsList.scss"

export default function Posts() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { loading, postsByUserId } = useSelector((state) => state.posts);
  const { loading: usersLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts(userId));
  }, [dispatch, userId, postsByUserId]);

  if (loading || usersLoading) return <Loader is_full_page/>;

  return <PostsLists />;
}
