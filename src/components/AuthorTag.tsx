import React from "react";
import { Link } from "react-router-dom";
import { User } from "../dataInterfaces";
import { ROUTER_USER_FEED_BASE } from "../utils/routes";

interface AuthorTagProps {
  author: User;
  className?: string;
}
const AuthorTag = ({ author, className }: AuthorTagProps) => (
  <Link to={`${ROUTER_USER_FEED_BASE}/${author._id}`}>
    <div className={`author-tag ${className}`}>by {author.username}</div>
  </Link>
);

export default AuthorTag;
