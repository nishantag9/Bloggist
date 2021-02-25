export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const API = {
  getUsers: () => "/users",
  getUserPosts: (userId) => `/posts?userId=${userId}&skip=0&limit=5`,
  getPostDetails: (postId) => `/posts/${postId}`,
  delete: (postId) => `/posts/${postId}`,
  getComments: (postId) => `/posts/${postId}/comments`,
};

export const DELETED = "DELETED";

export const DARK = "dark";
export const LIGHT = "light";
export const DEFAULT_THEME = DARK;
export const THEME_KEY = "THEME";
