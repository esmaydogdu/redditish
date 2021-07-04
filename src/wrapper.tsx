import React, { FC } from "react";
import { MemoryRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { initialPosts, PostsProvider } from "./contexts";
import { ContextProps } from "./types";

export const ProviderWrapper = (props: { children: ContextProps }) => {
  localStorage.setItem("posts", JSON.stringify(initialPosts));
  return (
    <MemoryRouter>
      <PostsProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </PostsProvider>
    </MemoryRouter>
  );
};
