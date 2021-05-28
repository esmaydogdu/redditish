/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ContextProps } from "../types";

export const PostsContext = createContext({} as any);

export const PostsProvider = (props: ContextProps) => {
  // We will use history for storing sorting and pagination mechanism.
  // We will also listen history changes to change sorting and pagination.
  const history = useHistory();

  // Posts are initially read from localStorage, if not it is [].
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts") || "[]")
  );

  // FilteredPosts are modified Posts accordingly history location search params.
  const [filteredPosts, setFilteredPosts] = useState([]);

  // PerPage is the number of posts within a page.
  const [perPage, setPerPage] = useState(3);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        filteredPosts,
        perPage,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};
