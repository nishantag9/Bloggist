import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../../components/input";

const DEFAULT_PAGE_SIZE = 10;
const NEXT = "NEXT";
const PREV = "PREV";

export default function PostsList() {
  const { userId } = useParams();
  const { postsByUserId } = useSelector((state) => state.posts);
  const userPosts = postsByUserId[userId];
  const [filter, setFilter] = useState("");
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [pageSizeText, setPageSizeText] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageSizeSet = () => {
    if (!Number(pageSizeText))
      return toast.error("Please enter a number for page size");
    setPageSize(pageSizeText);
  };

  const handlePagination = (nav) => {
    switch (nav) {
      case NEXT:
        setCurrentPage((curPage) => curPage + 1);
        break;
      case PREV:
        setCurrentPage((curPage) => curPage - 1);
        break;
      default:
        break;
    }
  };

  const getCurentPage = (list) =>
    list.slice(pageSize * currentPage, pageSize * (currentPage + 1));

  const filteredUserPosts = userPosts.filter((post) =>
    post.title.includes(filter)
  );

  const currentPagePosts = getCurentPage(filteredUserPosts);

  const totalPages = Math.ceil(filteredUserPosts.length / pageSize);
  debugger;

  const getPageText = () => `${currentPage + 1} of ${totalPages}`;

  const isPrevDisabled = () => !currentPage;
  const isNextDisabled = () => totalPages - currentPage === 1;

  return (
    <div>
      <Input
        label="Filter"
        type="text"
        name="filter"
        placeholder="Filter Title"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Input
        label="Page Size"
        type="text"
        name="filter"
        placeholder="Page Size"
        value={pageSizeText}
        onChange={(e) => setPageSizeText(e.target.value)}
      />
      <button onClick={handlePageSizeSet}>SET</button>
      {currentPagePosts.map((post) => (
        <PostItem post={post} />
      ))}
      <div>
        <button
          onClick={() => handlePagination(PREV)}
          disabled={isPrevDisabled()}
        >
          PREV
        </button>
        {getPageText()}
        <button
          onClick={() => handlePagination(NEXT)}
          disabled={isNextDisabled()}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

const PostItem = ({ post }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <p>{post.title}</p>
      <Link to={`${pathname}/post/${post.id}`}>Details</Link>
    </div>
  );
};
