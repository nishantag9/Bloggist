import React, { useEffect } from "react";
import Table from "./components/table";
import { useDispatch } from "react-redux";

import { getUsers } from "./modules/home/redux/actions";

const headers = ["First", "SECOND"];
const rows = [
  ["First 1st", "SECOND 2nd"],
  ["First 1st", "SECOND 2nd"],
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <Table headers={headers} rows={rows} />;
}

export default App;
