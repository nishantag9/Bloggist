import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import get from "lodash/get";
import { Link } from "react-router-dom";

import { toLowerCase } from "../../../helpers/helpers";
import Table from "../../../components/table";
import Input from "../../../components/input";

const headers = ["Name", "Company", "Blog Posts"];

//configurable filters list
const FILTERS = {
  name: "",
  "company.name": "",
};

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [filters, setFilters] = useState(FILTERS);
  const { list, loading } = useSelector((state) => state.users);

  const handleFilter = (e) => {
    setFilters((filters) => ({ ...filters, [e.target.name]: e.target.value }));
  };

  const filterUserList = useCallback(() => {
    const filtersList = Object.keys(filters);
    let filteredUserList = list;

    filtersList.forEach((filter) => {
      filteredUserList = filteredUserList.filter((item) =>
        toLowerCase(get(item, filter)).includes(toLowerCase(filters[filter]))
      );
    });
    setUserList(filteredUserList);
  }, [list, filters]);

  useEffect(() => {
    filterUserList();
  }, [loading, filterUserList]);

  const getRows = () =>
    userList.map((user) => [
      user.name,
      user.company.name,
      <Link to={`/posts/${user.id}`}>{user.name.split(" ")[0]} posts</Link>,
    ]);

  return (
    <div className="user-list">
      <div className="user-list__filters">
        <p className="user-list__filters--title">Filters</p>
        <span className="user-list__filters--wrapper">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleFilter}
          />
          <Input
            type="text"
            name="company.name"
            placeholder="Company Name"
            onChange={handleFilter}
          />
        </span>
      </div>

      <Table headers={headers} rows={getRows()} />
    </div>
  );
};

export default UserList;
