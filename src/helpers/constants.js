export const BASE_URL = "https://jsonplaceholder.typicode.com"

export const API = {
    getUsers : () => "/users",
    getUserPosts : (userId) => `/posts?userId=${userId}`,
    getPostDetails: (postId) => `/posts/${postId}`,
    delete: (postId) => `/posts/${postId}`
}

export const DELETED = "deleted"