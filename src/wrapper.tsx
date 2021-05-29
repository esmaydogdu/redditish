import React, { FC } from "react";
import { MemoryRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { PostsProvider } from "./contexts";

export const ProviderWrapper = ({ children }: { children: FC }) => {
  const initialPosts = [
    { timestamp: 1, name: "reddit", url: "https://reddit.com", vote: 2 },
    { timestamp: 2, name: "google", url: "https://google.com", vote: 1 },
    { timestamp: 3, name: "twitter", url: "https://twitter.com", vote: 2 },
    { timestamp: 4, name: "facebook", url: "https://facebook.com", vote: -5 },
  ];
  localStorage.setItem("posts", JSON.stringify(initialPosts));
  return (
    <MemoryRouter>
      <PostsProvider>
        <ToastProvider>{children}</ToastProvider>
      </PostsProvider>
    </MemoryRouter>
  );
};

export const EmptyProviderWrapper = ({ children }: { children: FC }) => {
  return (
    <MemoryRouter>
      <PostsProvider>
        <ToastProvider>{children}</ToastProvider>
      </PostsProvider>
    </MemoryRouter>
  );
};
