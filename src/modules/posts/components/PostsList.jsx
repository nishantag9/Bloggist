import React, { useState, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getFormattedUserName } from "../../../helpers/helpers";

import Input from "../../../components/input";

const DEFAULT_PAGE_SIZE = 10;
const NEXT = "NEXT";
const PREV = "PREV";

export default function PostsList() {
  const { userId } = useParams();
  const { postsByUserId } = useSelector((state) => state.posts);
  const { list } = useSelector((state) => state.users);
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

  const getUserName = useCallback(() => {
    let user = list.find((user) => user.id === Number(userId));
    return getFormattedUserName(user.name);
  }, [list, userId]);

  const getCurentPage = (list) =>
    list.slice(pageSize * currentPage, pageSize * (currentPage + 1));

  const filteredUserPosts = userPosts.filter((post) =>
    post.title.includes(filter)
  );

  const currentPagePosts = getCurentPage(filteredUserPosts);

  const totalPages = Math.ceil(filteredUserPosts.length / pageSize);
  const getPageText = () =>
    `${totalPages ? currentPage + 1 : 0} of ${totalPages}`;

  const isPrevDisabled = () => !currentPage;
  const isNextDisabled = () => totalPages - currentPage === 1;

  return (
    <div className="post-list">
      <div className="post-list__info">
        <h3 className="post-list__user">{getUserName()}'s Posts</h3>
        <div className="post-list__actions">
          <div className="post-list__page-size">
            <Input
              label="Page Size"
              type="text"
              name="filter"
              placeholder="Page Size"
              value={pageSizeText}
              onChange={(e) => setPageSizeText(e.target.value)}
            />
            <button onClick={handlePageSizeSet}>SET</button>
          </div>
          <div className="post-list__filter">
            <Input
              label="Filter"
              type="text"
              name="filter"
              placeholder="Filter Title"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="post-list__list">
        {currentPagePosts.map((post) => (
          <PostItem post={post} />
        ))}
        {!currentPagePosts.length && (
          <div className="post-list__empty">
            <h3>NO RECORDS FOUND</h3>
          </div>
        )}
      </div>

      <div className="post-list__pagination">
        <button
          onClick={() => handlePagination(PREV)}
          disabled={isPrevDisabled()}
        >
          PREV
        </button>
        <p className="post-list__pagination--text">{getPageText()}</p>
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
    <div className="post-item">
      <p className="post-item__title">{post.title}</p>
      <Link className="post-item__details" to={`${pathname}/post/${post.id}`}>
        Details
      </Link>
    </div>
  );
};
