import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ContextProps, Post, SearchParams } from "../types";

export const PostsContext = createContext({} as any);

export const initialPosts = [
  { timestamp: 1, name: "reddit", url: "https://reddit.com", votes: 2 },
  { timestamp: 2, name: "google", url: "https://google.com", votes: 1 },
  { timestamp: 3, name: "twitter", url: "https://twitter.com", votes: 2 },
  { timestamp: 4, name: "facebook", url: "https://facebook.com", votes: -5 },
  { timestamp: 5, name: "github", url: "https://github.com", votes: 3 },
  { timestamp: 6, name: "codepen", url: "https://codepen.com", votes: 2 },
];

export const PostsProvider = (props: ContextProps) => {
  // We will use history for storing sorting and pagination mechanism.
  // We will also listen history changes to change sorting and pagination.
  const history = useHistory();

  // Posts are initially read from localStorage, if not it is [].
  const [posts, setPosts] = useState(
    JSON.parse(
      localStorage.getItem("posts") || JSON.stringify(initialPosts)
    ) as Post[]
  );

  // FilteredPosts are modified Posts accordingly history location search params.
  const [filteredPosts, setFilteredPosts] = useState([] as Post[]);

  // PerPage is the number of posts within a page.
  const [perPage] = useState(5);

  // sortBy method will sort and paginate by history location search params,
  // It will use actual posts array and set this into filteredPosts array.
  const sortBy = () => {
    // Reading history location to extract search params to decide sorting and paging choice.
    const searchParams = new URLSearchParams(history.location.search);
    const sortParam = searchParams.get("sort");
    const pageParam = Number(searchParams.get("page")) || 1;

    // To keep this state immutable.
    let _posts = posts.slice();

    // Sorting algorithm according to the sort search param.
    if (sortParam === SearchParams.asc) {
      _posts.sort((a, b) => a.votes - b.votes || b.timestamp - a.timestamp);
    } else if (sortParam === SearchParams.desc) {
      _posts.sort((a, b) => b.votes - a.votes || b.timestamp - a.timestamp);
    } else {
      _posts.sort((a, b) => b.timestamp - a.timestamp);
    }

    // Pagination algorithm also reads page param from history location and sliceses the posts array.
    _posts = _posts.slice(pageParam * perPage - perPage, pageParam * perPage);
    setFilteredPosts(_posts);
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  // It handles the click delete on post.
  const handleClickDeletePost = (timestamp: number) => {
    // Deletes the selected post by its timestamp.
    let _posts = posts.filter((post) => post.timestamp !== timestamp);
    setPosts(_posts);

    /*
      In case of the deletion of last element on a page,
      we have to redirect the user to the previous page.
    */
    const searchParams = new URLSearchParams(history.location.search);
    const pageParam = Number(searchParams.get("page"));

    // Calculates the amount of posts on the active page(read from history).
    _posts = _posts.slice(pageParam * perPage - perPage, pageParam * perPage);

    if (_posts.length === 0 && pageParam > 1) {
      searchParams.set("page", String(pageParam - 1));
      history.push({ pathname: "/", search: searchParams.toString() });
    }
  };

  const handleClickUpvote = (timestamp: number) => {
    setPosts(
      posts.map((post) => {
        if (post.timestamp === timestamp) {
          post.votes++;
        }
        return post;
      })
    );
  };

  const handleClickDownvote = (timestamp: number) => {
    setPosts(
      posts.map((post) => {
        if (post.timestamp === timestamp) {
          post.votes--;
        }
        return post;
      })
    );
  };

  // Applies effects on every posts changes or history changes.
  // Also cleans the history listener on component will unmount to avoid multiple register listeners(sortBy).
  useEffect(() => {
    sortBy();
    return history.listen(sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        filteredPosts,
        perPage,
        handleClickDeletePost,
        handleClickUpvote,
        handleClickDownvote,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  /* istanbul ignore if */
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};
