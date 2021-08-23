import { API_HOST_NAME } from "./constants";

//* API ROUTES
const API_ROOT = `${API_HOST_NAME}/api`;
export const API_USER = `${API_ROOT}/user`;
export const API_BLOGPOST = `${API_ROOT}/blog`;
export const API_LOGIN = `${API_ROOT}/auth/login`;
export const API_REGISTER = `${API_ROOT}/user`;

export const getUserBlog = (userid: string) => `${API_USER}/${userid}/blog`;
export const getPost = (blogid: string) => `${API_BLOGPOST}/${blogid}`;
export const getPostComments = (blogid: string) =>
  `${API_BLOGPOST}/${blogid}/comment`;

//* PAGE ROUTES
export const ROUTER_USER_FEED_BASE = "/feed/user";
export const ROUTER_POST = "/post";
