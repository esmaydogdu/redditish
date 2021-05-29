import React, { FC } from "react";
import { MemoryRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { initialPosts, PostsProvider } from "./contexts";

export const ProviderWrapper = ({ children }: { children: FC }) => {
  localStorage.setItem("posts", JSON.stringify(initialPosts));
  return (
    <MemoryRouter>
      <PostsProvider>
        <ToastProvider>{children}</ToastProvider>
      </PostsProvider>
    </MemoryRouter>
  );
};

