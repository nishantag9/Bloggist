import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsers } from "./redux/actions";
import UserList from "./components/UserList";
import Loader from "../../components/loader";

import "./styles.scss"


export default function Home() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <Loader />;

  return <UserList />;
}
